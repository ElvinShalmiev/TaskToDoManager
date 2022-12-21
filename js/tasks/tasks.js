import { Utils } from "./../utils.js";
import { Status } from "./status.js";
export class Task {
    //props:
    description;
    status;
    timeStamp = Utils.currentDateString();
    //constructor:
    constructor(description, status = Status.Uncompleted) {
        this.description = description;
        this.status = status;
    }
    //methods
    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}
