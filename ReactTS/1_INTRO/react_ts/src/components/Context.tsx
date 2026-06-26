import { useContext } from "react";
import { AppContext } from "../App";

function Context() {
  const context = useContext(AppContext);
  return (
    <>
      {context && (
        <div>
          <hr />
          <h2>Context</h2>
          <p>Language: {context.language}</p>
          <p>Framework: {context.framework}</p>
          <p>Projects: {context.projects}</p>
          <hr />
        </div>
      )}
    </>
  );
}

export default Context;
