// 6 - CSS Modules - SCOPED (não vaza para outros elementos)
import styles from "./Title.module.css"; //qualquer nome, mas o .module. é obrigatório

const Title = () => {
  return (
    <div>
      <h1 className={styles.title}>Meu título SCOPED</h1>
    </div>
  );
};

export default Title;
