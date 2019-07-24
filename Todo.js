import React, { Component } from 'react'


class Todo extends Component {

    constructor(props){
        super(props)
            this.state ={
                input : "",
                tasks : []
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

    

    render() {                
        return (                
            <div>
                    <div>
                        <h1>ToDo App</h1>
                        <p>Currently there are {this.state.tasks.length} tasks</p>
                    </div>
                    <div>
                        <input type="text" placeholder="add task" value={this.state.input} onChange={this.update}></input>
                        <button onClick={this.add}> Task #{this.state.tasks.length +1}</button>
                    </div>
                    <div>
                        <ul type="none">
                            {this.state.tasks.map((task, i) =>
                                <li key={i} ><input type="checkbox"  />{task} <button data-index={i} onClick={this.dlit}>x</button></li>
                            )}                           
                        </ul>
                        
                    </div>

            </div>
        )
    }
}
export default Todo
