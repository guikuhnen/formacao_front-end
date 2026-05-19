// 6 - Eventos
const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Clicou no botão");
  };

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if (x) {
      return (
        <div>
          <h1>Renderizando isso</h1>
        </div>
      );
    } else {
      return <h1>Renderizando aquilo</h1>;
    }
  };

  // Aguardando a resposta de uma API, depois de pronto, pula e executa o return padrão
  // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando um evento")}>
          Clique aqui
        </button>

        {/* 7 - Eventos com função */}
      </div>
      <div>
        <button onClick={handleClick}>Clique aqui função</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};
export default Events;
