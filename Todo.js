import React, { Component } from 'react'


class Todo extends Component {

    constructor(props){
        super(props)
            this.state ={
                input : "",
                tasks : [],
                completed: this.completed
            } 
    }  

    

//----------------------------------------------updatetext field----------------------------------------------
    update = (event) => {
        this.setState ({
            input : event.target.value
        });
    }
//----------------------------------------------add the task----------------------------------------------
    add = () => {
        this.setState (state =>({
            tasks : [...state.tasks, state.input],
            input : ""
        }))
    }
//----------------------------------------------delete the task----------------------------------------------
    dlit = (event) => {
        const index = event.target.dataset.index;
        this.setState (state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1)
            return{
                tasks : tasks
            };
        });
    }
//----------------------------------------------toggele checkbox----------------------------------------------
    toggleCompleted = () => {
        this.setState({
            completed : !this.state.completed
        })
    }     


    render() {   
        var isDisabled = !this.state.input ? '!isDisabled':'';
        var isComplete = this.state.completed ? 'complete' : '';           
        var isEmpty = this.state.tasks.length === 0 ? 'No Tasks':' Currently there are ' +this.state.tasks.length+ ' tasks';  
        return (                
            <div>
                    <div>
                        <h1>ToDo App</h1>
                        <p>{isEmpty}</p>
                    </div>
                    <div>
                        <input type="text" placeholder="add task" value={this.state.input} onChange={this.update}></input>
                        <button onClick={this.add} disabled={isDisabled}> Task #{this.state.tasks.length +1}</button>
                    </div>
                    <div>
                        <ul type="none">
                            {this.state.tasks.map((task, i) =>
                                <li key={i} className={isComplete}><input type="checkbox" value={this.state.completed} onChange={() => this.toggleCompleted()} />{task} <button data-index={i} onClick={this.dlit}>x</button></li>
                            )}                           
                        </ul>
                        
                    </div>

            </div>
        )
    }
}



export default Todo