import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setText("");

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef</h2>
      <p>Valor do useRef: {numberRef.current}</p>
      <p>Valor do counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>counter A</button>
      <p>Valor do counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>counter B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
