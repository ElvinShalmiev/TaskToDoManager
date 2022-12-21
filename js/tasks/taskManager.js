export class TaskManager {
    //props:
    tasks = [];
    //methods:
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(timeStamp) {
        let index = this.tasks.findIndex((t) => t.timeStamp === timeStamp);
        this.tasks.splice(index, 1);
    }
    updateTask(task) {
        let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
        this.tasks.splice(index, 1, task);
    }
}
export const tm = new TaskManager();
