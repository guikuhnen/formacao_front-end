import { useState, type ChangeEvent } from "react";

function State() {
  const [text, setText] = useState<string | null>(null);

  return (
    <div>
      <h2>State</h2>
      <input
        type="text"
        placeholder="Digite algo..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <p>O que você digitou: {text}</p>
      <hr />
    </div>
  );
}

export default State;
