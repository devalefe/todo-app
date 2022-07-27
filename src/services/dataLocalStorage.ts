import { NewTaskType } from "../interfaces/Task";

export function addLocalStorage(tasks: NewTaskType[]) {
    // console.log("Adicionando dados ao Local Storage...")
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getLocalStorage() {
    // console.log("Coletando dados do Local Storage...")
    let tasksList:NewTaskType[] = JSON.parse(localStorage.getItem("tasks") || "[{}]");
    let tasksDoneCount = 0;
    tasksList.filter(task => {
        if (task.isDone) {
            tasksDoneCount += 1
        }
    })
    return {tasksList, tasksDoneCount};
}
