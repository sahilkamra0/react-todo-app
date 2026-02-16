import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    if(count<10)
    setCount(count + 1);
  }

  function decrement() {
    if (count>-5)
    setCount(count-1)
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
}

export default useCounter;
