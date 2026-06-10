import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Buscando os dados do BD...");
    setItems(getItems());
  }, [getItems]);

  return <div>{items && items.map((item) => <p key={item}>{item}</p>)}</div>;
};

export default List;
