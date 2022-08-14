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
            newTask: '',
            character: ''
        };
        this.newTaskChange = this.newTaskChange.bind(this)
    };

    componentDidMount() {
        fetch(`https://swapi.dev/api/people/4`)
            .then(res => res.json())
            .then(result => {
                this.setState({ character: result })
            })
    }

    componentDidUpdate() {
        console.log('Did update');

    }

    componentWillUnmount() {

    }


    newTaskChange(e) {
        this.setState({ newTask: e.target.value });
    }

    addNewTaskHandler(e) {
        e.preventDefault();
        this.setState((state) => ({
            tasks: [...state.tasks, state.newTask],
            newTask: '',
        }));
    }

    render() {
        return (
            <>
                <h2>Current Character: {this.state.character.name}</h2>

                <ul>
                    {this.state.tasks.map(x => <TaskItem key={x} title={x} />)}
                </ul>

                <form onSubmit={this.addNewTaskHandler.bind(this)}>
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