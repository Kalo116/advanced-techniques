import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        return (
            <ul>
                <TaskItem title='Task 1' />
                <TaskItem title='Task 2' />
                <TaskItem title='Task 3' />
            </ul>
        )
    }
};

export default TaskList;