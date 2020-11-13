import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheck, faCoffee, faTrash);

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Item 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Item 2',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Item 3',
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => 
        todo.id !== id
      )]
    })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

render() {
  console.log(this.state.todos);

  return (
    <div className="App">
    <Container fluid>
      <Row>
          <Col lg={4} md={{ span: 8, offset: 4 }}>
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </Col>
      </Row>
    </Container>
     
    </div>
  );
}
}

export default App;
