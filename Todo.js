import React, { Component } from 'react'
import { Button, ListGroup, Jumbotron, Navbar, Form, Nav} from 'react-bootstrap';



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
      


    render() {   
        var isDisabled = !this.state.input ? '!isDisabled':'';
        var isComplete = this.state.completed ? 'complete' : '';           
        var isEmpty = this.state.tasks.length === 0 ? 'No Tasks':'{&#xe012;}' +this.state.tasks.length;  
        return (                
            <div >
                    <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="todo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Todo App'}
                        
                        </Navbar.Brand>    
                        <Nav className="mr-auto">
                        </Nav>
                            <Form inline>
                            <Button variant="outline-success">Task { +this.state.tasks.length}</Button>
                            </Form>
                    </Navbar>
                    </div>
                    <Jumbotron className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="add task" value={this.state.input} onChange={this.update}></input>
                        <Button variant="outline-primary" onClick={this.add} disabled={isDisabled}> Task #{this.state.tasks.length +1}</Button>
                    </Jumbotron>
                    <div>
                    
                        <ListGroup type="none">
                            {this.state.tasks.map((task, i) =>
                                <ListGroup.Item action variant="light" key={i} ><input type="checkbox" controlId="formBasicChecbox" value={this.state.completed} /> {task} <Button className="float-right" variant="outline-danger" size="sm" data-index={i} onClick={this.dlit}>
                                    Remove
                                    </Button></ListGroup.Item>
                            )}                           
                        </ListGroup>                        
                    </div>

            </div>
        )
    }
}



export default Todo