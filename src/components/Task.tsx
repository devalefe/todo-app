import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react";
import { TaskType } from "../interfaces/Task";

export function Task({ id, text, isDone, onDoneTask, onDeleteTask }: TaskType) {
  function handleTaskDone() {
    onDoneTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        name="check"
        id={id}
        hidden
        checked={isDone}
        onChange={handleTaskDone}
      />
      <label htmlFor={id} title="Marcar como concluída">
        <Check />
      </label>
      <p>{text}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
