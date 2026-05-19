// 4 - Template Expression

const TemplateExpression = () => {
  const name = "Guilherme";

  const data = {
    age: 30,
    job: "Programador",
  };

  return (
    <div>
      <p>A soma é {5 + 5}</p>
      <h3>Olá, {name}!</h3>
      <p>Idade: {data.age}</p>
      <p>Profissão: {data.job}</p>
    </div>
  );
};

export default TemplateExpression;
