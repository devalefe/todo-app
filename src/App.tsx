import styles from "./App.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";
import { NewTaskType } from "./interfaces/Task";
import { NoTasks } from "./components/NoTasks";

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<NewTaskType[]>([]);
  const [tasksDone, setTasksDone] = useState(0);

  function handleChangeNewText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleAddNewTask(event: FormEvent<HTMLElement>) {
    event.preventDefault();
    let newTask = {
      id: (tasks.length + 1).toString(),
      text: newTaskText,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText("");
  }

  function onDoneTask(taskIsDone: boolean) {
    if (taskIsDone) {
      setTasksDone(tasksDone + 1);
    } else {
      setTasksDone(tasksDone - 1);
    }
  }

  function onDeleteTask(idOfTaskToDelete: string) {
    let tasksWithoutDeletedOne = tasks.filter((task) => {
      if (task.id !== idOfTaskToDelete) {
        return task;
      }
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form action="" onSubmit={handleAddNewTask}>
          <input
            title="Criar uma nova tarefa"
            type="text"
            name="task"
            autoComplete="off"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleChangeNewText}
          />
          <button
            type="submit"
            title="Criar tarefa"
            disabled={newTaskText.length <= 0}
          >
            Criar
            <PlusCircle />
          </button>
        </form>
        <main>
          <div className={styles.info}>
            <p>
              Tarefas Criadas
              <span className={styles.badge}>{tasks.length}</span>
            </p>
            <p>
              Concluídas
              <span className={styles.badge}>
                {tasksDone}
                {tasks.length ? " de " + tasks.length : ""}
              </span>
            </p>
          </div>
          <div className={styles.list}>
            {tasks.length <= 0 && <NoTasks />}
            {tasks?.map(({ id, text, isDone }) => {
              return (
                <Task
                  key={id}
                  id={id}
                  text={text}
                  isDone={isDone}
                  onDoneTask={onDoneTask}
                  onDeleteTask={onDeleteTask}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
