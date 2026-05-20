import { useState } from "react";

const ConditionalRender = () => {
  const x = true;
  const y = 1;
  const z = 4;
  return (
    <div>
      {/* 7 - Conditional Rendering */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true, sim!</p>}
      {y === 0 ? (
        <div>
          <p>Se y for 0, sim!</p>
        </div>
      ) : (
        <div>
          <p>Se y for diferente de 0, não!</p>
        </div>
      )}
      {typeof z === "number" && z > 3 && (
        <p>Se z for do tipo number e maior que 3, sim!</p>
      )}
    </div>
  );
};

export default ConditionalRender;
