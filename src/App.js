import './App.css';
import React from 'react';
import TaskList from './components/TaskList';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>ToDoList</h1>
                    <TaskList />
                </header>
            </div>
        );
    }
}


export default App;
