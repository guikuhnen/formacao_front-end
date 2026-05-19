import MyComponent from "./MyComponent";

// 1 - Criação de componente React
const FirstComponent = () => {
  return (
    // Apenas um elemento pai
    <div>
      <h2>First Component!</h2>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
