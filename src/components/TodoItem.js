import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItem extends Component {

    getStyle = () => {
        return {
            position: 'relative',
            padding: '0',
            margin: '3px',
            fontWeight: 'bold',
            lineHeight: '20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? 'lightgreen' : '#f5f5f5'
        }
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <ListGroup>
                <ListGroup.Item style={this.getStyle()}>
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>  */}
                    {' '}
                    {title}
                    <ButtonGroup className="float-right">
                        <Button onClick={this.props.markComplete.bind(this, id)} variant="success"><FontAwesomeIcon icon='check'></FontAwesomeIcon></Button>
                        <Button onClick={this.props.deleteTodo.bind(this, id)} variant="danger"><FontAwesomeIcon icon='trash'></FontAwesomeIcon></Button>                        
                    </ButtonGroup>
                </ListGroup.Item>
            </ListGroup>
        )
    }
}


// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
