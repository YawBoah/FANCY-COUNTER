import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount }) {
  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
      className="count-btn"
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
export default CountButton;
