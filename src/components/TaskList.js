import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { title: 'Task 1', isCompleted: false },
                { title: 'Task 2', isCompleted: false },
                { title: 'Task 3', isCompleted: false },
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
            tasks: [...state.tasks, { title: state.newTask, isCompleted: false }],
            newTask: '',
        }));
    }

    taskClickHandler(taskTitle) {
        this.setState((state) => ({
            tasks: state.tasks.map(x => x.title === taskTitle ? { ...x, isCompleted: !x.isCompleted } : x)
        }));
    }
    taskDeleteHandler = (taskTitle) => {
        this.setState(state => ({
            tasks: state.tasks.filter(x => x.title !== taskTitle)
        }))
    }

    render() {
        return (
            <>
                <h2>Current Character: {this.state.character.name}</h2>

                <ul>
                    {this.state.tasks.map(x =>
                        <TaskItem
                            key={x.title}
                            title={x.title}
                            isCompleted={x.isCompleted}
                            onClick={this.taskClickHandler.bind(this)}
                            onDelete={this.taskDeleteHandler.bind(this)}
                        />
                    )}
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