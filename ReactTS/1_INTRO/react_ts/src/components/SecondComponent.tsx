interface Props {
  name: string;
}

function SecondComponent(props: Props) {
  return (
    <div>
      <h2>Meu segundo componente</h2>
      <p>O nome dele é {props.name}</p>
      <hr />
    </div>
  );
}

export default SecondComponent;
