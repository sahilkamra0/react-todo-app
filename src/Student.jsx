
import { useContext } from "react";
import { UniformContext } from "./App";

function Student() {
  const { uniform, setUniform } = useContext(UniformContext);

  return (
    <div>
      <p>Today's uniform: {uniform}</p>
      <button onClick={() => setUniform("blue")}>
        Change Uniform
      </button>
    </div>
  );
}

export default Student;
