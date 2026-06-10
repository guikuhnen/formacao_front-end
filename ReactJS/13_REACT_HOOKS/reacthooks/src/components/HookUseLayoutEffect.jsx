import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Nome 0");

  useEffect(() => {
    console.log("2 - useEffect");
    setName("Nome 2");
  }, []);

  useEffect(() => {
    console.log("3 - useEffect");
    setName("Nome 3");
  }, []);

  useLayoutEffect(() => {
    console.log("1 - useLayoutEffect");
    setName("Nome 1");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>{name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
