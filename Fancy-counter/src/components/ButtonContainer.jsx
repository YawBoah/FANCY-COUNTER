import CountButton from "./CountButton";


function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount} />
      <CountButton type="plus" setCount={setCount} />
    </div>
  );
}

export default ButtonContainer;


