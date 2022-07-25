export interface TaskType {
    id: string;
    text: string;
    isDone: boolean;
    onTaskDone: (taskDone:boolean) => void;
    onDeleteTask: (idOfTaskToDelete:string) => void;
}

export interface NewTaskType {
    id: string;
    text: string;
    isDone: boolean;
}