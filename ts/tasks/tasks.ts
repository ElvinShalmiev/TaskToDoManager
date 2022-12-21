import { Utils } from "./../utils.js";
import { Status } from "./status.js";

export class Task {
    //props:
    description: string;
    status: Status;
    timeStamp = Utils.currentDateString();

    //constructor:
    constructor(description: string, status: Status = Status.Uncompleted) {
        this.description = description;
        this.status = status
    }
    //methods
    toString() {
        return `description: ${this.description} status: ${this.status}`;
    }
}