import "./Button.css";

const Button = ({ id, text, action }) => {
  //   const handleAction = (e) => {
  //     action(e);
  //   };

  return (
    <button id={id} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
