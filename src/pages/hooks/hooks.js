//Custom components
import UseStateHook from "./use-state";

const Hooks = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container">
        <h1 className="text-center text-3xl font-bold leading-loose underline-offset-4 decoration-dotted underline text-gray-500">
          Hooks in React
        </h1>
        <UseStateHook />
      </div>
    </div>
  );
};

export default Hooks;
