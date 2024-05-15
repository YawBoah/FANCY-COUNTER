import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 10 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setCount(count + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.addEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
