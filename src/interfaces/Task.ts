export interface NewTaskType {
    id: string;
    text: string;
    isDone: boolean;
}

export interface TaskType extends NewTaskType {
    onDoneTask: (taskIsDone:string) => void;
    onDeleteTask: (idOfTaskToDelete:string) => void;
}
