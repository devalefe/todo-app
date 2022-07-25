import styles from "./NoTasks.module.css";
import Clipboad from "../assets/clipboard.svg";

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <img src={Clipboad} alt="" />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
