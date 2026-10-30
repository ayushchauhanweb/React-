import { memo } from "react";

const ChildComponent = memo(function ({ printHello }) {
  console.log("child component re render ");
  return (
    <div>
      ChildComponent
      <br />
      <button onClick={printHello}>Print hii in console</button>
    </div>
  );
});

export default ChildComponent;
