import { useState, useRef } from "react";
import CallFromChild from "./components/call-from-child";
import ParentToChild from "./components/parent-to-child";

export function HomePage() {
  const [num, setNum] = useState(0);
  const [childNum,setchildNum] = useState(0);
  const childRef = useRef();

  const handleButtonClick = () => {
    if (childRef.current) {
      childRef.current.childFunction(childNum-1);
    }
  };

  console.log("Hello");

  const getFromChild=(num)=>{
    setchildNum(num);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: "16px" }}>
        <h3>{num}</h3>
      </div>
      <CallFromChild num={num} increament={setNum} />
      <div style={{ padding: "16px" }}>
        <button
          style={{
            outline: "none",
            backgroundColor: "turquoise",
            padding: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "700",
          }}
          onClick={handleButtonClick}
        >
          Decrease
        </button>
      </div>
      <ParentToChild ref={childRef} sendValueToParent={getFromChild}/>
    </div>
  );
}
