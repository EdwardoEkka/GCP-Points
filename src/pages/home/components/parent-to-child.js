import React, { forwardRef, useImperativeHandle, useState } from "react";

const ParentToChild = forwardRef((props, ref) => {
  const [num, setNum] = useState(0);
  
  useImperativeHandle(ref, () => ({
    childFunction(value) {
        setNum(value)
        props.sendValueToParent(num);
    },
  }));

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: "16px" }}>
        <h3>{num}</h3>
      </div>
    </div>
  );
});

export default ParentToChild;
