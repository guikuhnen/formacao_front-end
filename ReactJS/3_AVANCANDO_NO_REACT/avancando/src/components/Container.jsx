// 13 - Children

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
      {children}
      <p>Valor passado como prop: {myValue}</p>
    </div>
  );
};

export default Container;
