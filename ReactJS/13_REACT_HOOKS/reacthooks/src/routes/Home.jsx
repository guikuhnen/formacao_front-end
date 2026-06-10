import "./Home.css";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";

// 4 - useContext
import { useContext } from "react";
import { Context } from "../components/HookUseContext";

import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookImperativeHandle from "../components/HookImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(Context);

  return (
    <div>
      <h1>Home</h1>
      {/* 1 - useState */}
      <HookUseState />
      {/* 2 - useReducer */}
      <HookUseReducer />
      {/* 3 - useEffect */}
      <HookUseEffect />
      {/* 4 - useContext */}
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      {/* 5 - useRef */}
      <HookUseRef />
      {/* 6 - useCallback */}
      <HookUseCallback />
      {/* 7 - useMemo */}
      <HookUseMemo />
      {/* 8 - useLayoutEffect */}
      <HookUseLayoutEffect />
      {/* 9 - useImperativeHandle */}
      <HookImperativeHandle />
      {/* 10 - Hook Customizado */}
      <HookCustom />
    </div>
  );
};

export default Home;
