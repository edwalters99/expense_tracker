import React, { Component } from 'react';
import createRequest from '../../request';
import { Form, Button } from 'react-bootstrap';
const emailState = {
    email: '',
    error: ''
}

class ProfileUpdate extends Component {
    constructor() {
        super();
        this.state = {
          
                first_name: '',
                last_name: '',
                email: ''    
           
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount() {
                
        const fetchUser = () => {
            createRequest("/profile.json").then((response) => {
              
 
                this.setState(response);
                console.log(this.state)
               
                // setTimeout(fetchCategories, 5000);
            });
        };
        fetchUser();
    }
    

    // dynamic function
    _handleChange = (event) => {
        console.log('test')
        this.setState({[event.target.name]: event.target.value})
    }
    
    _handleSubmit = (event) => {
        event.preventDefault();
        console.log('testing');
        this.saveProfile()
    }
    

    saveProfile = () => {
        console.log('test saveProfile');
        const userData = this.state;
        console.log( userData );
        let token = localStorage.getItem('token');
        fetch('http://localhost:3000/profile_update.json?', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(results => console.log(results))
        .then(response => response.json())
        .then(jsonResponse => {
            // setSignupErrors(jsonResponse.errors);
            console.log(jsonResponse.errors)
        })
    }

    render() {
        
        return(
            <div className="col-md-4 offset-md-4 bg-light p-3">
                <h3 className="bg-light">Update Profile</h3>
                <Form onSubmit={ this._handleSubmit }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='first_name' onChange={ this._handleChange } value={this.state.first_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='last_name' onChange={ this._handleChange } value={ this.state.last_name } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type='email' onChange={ this._handleChange } value={this.state.email} required/>
                </Form.Group>

                <Button href='/profile' variant="secondary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        );
    };
}

export default ProfileUpdate;


// {props.errors ? 
//     <ul className = "signup-form-errors"> {props.errors.map((error) => (
//         <li key={error.id}>{error.title}</li>
//         ))}
//     </ul> 
// : null}


// function signUp (user) {
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           email: user.email,
//           first_name: user.first_name,
//           last_name: user.last_name,
//           password: user.password,
//           password_confirmation: user.password_confirmation
//         }
//       })
//     })
//     .then(response => response.json())
//     .then(jsonResponse => {
//       if (jsonResponse.errors) {
//         setSignupErrors(jsonResponse.errors);
//         console.log(jsonResponse.errors)
//       }
//       else {
//         setUser(jsonResponse)
//       }
//     })
//   }