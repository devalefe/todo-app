import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import { TaskType } from "../interfaces/Task";

export function Task({ id, text, isDone, onDoneTask, onDeleteTask }: TaskType) {
  const [done, setDone] = useState(isDone);

  function handleDoneTask() {
    setDone(!done);
    onDoneTask(!done);
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
        checked={done}
        onChange={handleDoneTask}
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
