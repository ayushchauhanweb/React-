import { useMemo } from "react";
import { useState } from "react";
import ChildComponent from "./Components/ChildComponent";
import { useCallback } from "react";

function calculateTotalSum() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [count, setCount] = useState(0);

  const value = useMemo(() => {
    return calculateTotalSum();
  }, []);

  const memoizedPrintHello = useCallback(() => {
    console.log("Hii");
  }, []);

  let obj = { count: 53, printHello: memoizedPrintHello };

  return (
    <div>
      <p>Value : {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Click</button>
      <p>Total sum : {value}</p>
      <ChildComponent {...obj} />
    </div>
  );
}

export default App;
