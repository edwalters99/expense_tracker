import React, { Component } from 'react';
import createRequest from '../../request';
import { Form, Button } from 'react-bootstrap';

class ProfileUpdate extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        this._handleFirstName = this._handleFirstName.bind(this);
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount() {
                
        const fetchUser = () => {
            createRequest("/profile.json").then((response) => {
                console.log(response)
 
                this.setState({users: response});

                // setTimeout(fetchCategories, 5000);
            });
        };
        fetchUser();
    }
    

    _handleFirstName(event) {
        console.log(event.target.value)
        this.setState({ users: event.target.value})
    }

    saveProfile(event) {
        event.preventDefault();
        createRequest("/profile.json").then((response) => {
            console.log(response)
            this.setState({users: response}) 
        });    
    }
    

    render() {
        
        return(
            <div className="col-md-4 offset-md-4 bg-light p-3">
                <h3 className="bg-light">Update Profile</h3>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={ this._handleFirstName } value={this.state.users.first_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={this.state.users.last_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={this.state.users.email} />
                </Form.Group>

                <Button onSubmit={ this.saveProfile} variant="secondary" type="submit" onClick={ this._handleInput }>
                    Submit
                </Button>
                </Form>
            </div>

        );
    };
}

export default ProfileUpdate;