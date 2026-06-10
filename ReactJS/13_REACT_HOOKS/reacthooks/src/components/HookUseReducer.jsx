import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  }, 0);

  // 2 - useReducer avançado
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, newTask];
      case "REMOVE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("caraca");
  const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

  function handleSubmit(e) {
    e.preventDefault();
    taskDispatch({ type: "ADD" });
  }

  function removeTask(id) {
    taskDispatch({ type: "REMOVE", id });
  }

  return (
    <div>
      <h2>Hook useReducer</h2>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default HookUseReducer;
