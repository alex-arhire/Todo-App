import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value});

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <Form className="mt-3" onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control inline type="text" 
                                          name="title" 
                                          placeholder="Add item..." 
                                          value={this.state.title} 
                                          onChange={this.onChange}
                                          ></Form.Control>
                        </Col>
                        <Col>
                            <Button type="submit" value="submit" variant="primary">Add</Button>
                        </Col>
                    </Form.Row>
                </Form.Group>    
            </Form>
        )
    }
}

export default AddTodo
