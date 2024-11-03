import { useState } from "react";

const UseStateHook = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex col-span-1 items-center justify-center border border-gray-800 rounded-lg p-4 ">
        <NumberStateExample />
      </div>
      <div className="flex col-span-1 items-center justify-center border border-gray-800 rounded-lg p-4">
        <StringStateExample />
      </div>
      <div className="flex col-span-1 items-center justify-center border border-gray-800 rounded-lg p-4">
        <BooleanStateExample />
      </div>
      <div className="flex col-span-1 items-center justify-center border border-gray-800 rounded-lg p-4">
        <ArrayStateExample />
      </div>
      <div className="flex col-span-1 items-center justify-center border border-gray-800 rounded-lg p-4">
        <ObjectStateExample />
      </div>
    </div>
  );
};

export default UseStateHook;

const NumberStateExample = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">Number: {number}</h2>
      <button
        onClick={() => setNumber(number + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

const StringStateExample = () => {
  const [text, setText] = useState("Hello!");

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">Text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
};

const BooleanStateExample = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">
        Visibility: {isVisible ? "Visible" : "Hidden"}
      </h2>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Toggle Visibility
      </button>
    </div>
  );
};

const ArrayStateExample = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">Items:</h2>
      <ul className="list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={addItem}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </div>
  );
};

const ObjectStateExample = () => {
  const [user, setUser] = useState({ name: "John", age: 25 });

  const updateAge = () => setUser({ ...user, age: user.age + 1 });
  const changeName = (name) => setUser({ ...user, name: name });

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">User Info:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        onClick={updateAge}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Increase Age
      </button>
      <input
        type="text"
        value={user.name}
        onChange={(e) => changeName(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
};
