import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                'Task 1',
                'Task 2',
                'Task 3',
            ],
            filter: 'all',
            newTask: ''
        };
        this.newTaskChange = this.newTaskChange.bind(this)
    };

    newTaskChange(e) {
        this.setState({ newTask: e.target.value });
    };

    render() {
        return (
            <>
                <ul>
                    {this.state.tasks.map(x => <TaskItem key={x} title={x} />)}
                </ul>

                <form >
                    <label htmlFor="new-task"></label>
                    <input
                        type="text"
                        id="new-task"
                        name="newTask"
                        value={this.state.newTask}
                        // onChange={this.newTaskChange.bind(this)}
                        onChange={this.newTaskChange}
                    />

                    <input type="submit" value="Add" />

                </form>
            </>
        )
    }
};

export default TaskList;