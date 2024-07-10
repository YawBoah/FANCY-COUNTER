## Overview

Fancy Counter is a React application that allows users to increment and decrement a counter with a limit between 0 and 10. The app provides a visually appealing interface with buttons to adjust the count and a reset functionality. Additionally, users can increment the counter using the space bar.

![image](https://github.com/YawBoah/FANCY-COUNTER/assets/126890146/dbc24a8e-df4f-4e24-b494-5727bbe0af73)

[Click to view the app](https://fcounter.netlify.app/)

## Features

- **Increment and Decrement Count**: Adjust the count between 0 and 10 using buttons.
- **Reset Count**: Reset the count to 0.
- **Keyboard Support**: Increment the count using the space bar.
- **Visual Feedback**: The card changes appearance when the count reaches its maximum limit.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Card](#card)
  - [CountButton](#countbutton)
  - [ResetButton](#resetbutton)
  - [Title](#title)
  - [Count](#count)
  - [ButtonContainer](#buttoncontainer)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/fancy-counter-app.git
   cd fancy-counter-app
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

## Usage

After starting the development server, you can view the application in your browser by navigating to `http://localhost:3000`.

### App Structure

```jsx
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <Card />
    </main>
  );
}

export default App;
```

## Components

### App

The main component that sets up the overall structure of the application.

### Card

```jsx
import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 10;

  useEffect(() => { 
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 10) {
          setCount(10);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
```

### CountButton

```jsx
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 10) {
          return 10;
        }
        return newCount;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

export default CountButton;
```

### ResetButton

```jsx
import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
```

### Title

Displays the title and shows a message when the counter is locked.

### Count

Displays the current count.

### ButtonContainer

Wraps the count buttons for styling purposes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

Happy coding!
