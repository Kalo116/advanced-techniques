import { Component } from "react";
import styles from './TaskItem.module.css';

class TaskItem extends Component {
    render() {

        const className = this.props.isCompleted ? styles.completed : '';

        return (
            <>
                <li
                    onClick={() => this.props.onClick(this.props.title)}
                    className={className}>
                    {this.props.title}
                </li>
                <button onClick={() =>this.props.onDelete(this.props.title)}>X</button>
            </>
        )
    }
};

export default TaskItem