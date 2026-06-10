import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  //   const premiumNumbers = ["0", "3", "7"];
  const premiumNumbers = useMemo(() => {
    return ["0", "3", "7"];
  }, []);

  useEffect(() => {
    console.log("Premium numbers foi alterado...");
  }, []);

  return (
    <div>
      <h2>HookUseMemo</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? (
        <p>O número {number} é um número premiado!</p>
      ) : (
        <p>O número {number} não é um número premiado!</p>
      )}
      <hr />
    </div>
  );
};

export default HookUseMemo;
