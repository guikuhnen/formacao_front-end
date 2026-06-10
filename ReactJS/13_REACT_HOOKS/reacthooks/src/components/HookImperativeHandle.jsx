import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookImperativeHandle;
