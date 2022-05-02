import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ProfileUpdate extends Component {
    constructor() {
        super();
        this.state = {
            users: [{
                id: 1,
                first_name: 'K',
                last_name: 'DC',
                email: 'kk@ga.co',
                password: 'chicken'
            }
        ]
        };
        this._handleFirstName = this._handleFirstName.bind(this)
    }
    

    _handleFirstName(event) {
        console.log(event.target.value)
        this.setState({ users: event.target.value})
    }
    

    render() {
        
        return(
            <div className="col-md-4 offset-md-4 bg-light p-3">
                <h3 className="bg-light">Update Profile</h3>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={ this._handleFirstName } placeholder={this.state.users[0].first_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder={this.state.users[0].last_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder={this.state.users[0].email} />
                </Form.Group>

                <Button variant="secondary" type="submit" onClick={ this._handleInput }>
                    Submit
                </Button>
                </Form>
            </div>

        );
    };
}

export default ProfileUpdate;