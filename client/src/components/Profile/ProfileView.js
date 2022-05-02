import React from 'react';
import {Form } from 'react-bootstrap';

const ProfileView = (props) => {
    return(
        <div className="col-md-4 offset-md-4 bg-light p-3">
           
            <h3 className="bg-light">User Profile</h3>
            <Form.Group className="mb-3">
                <Form.Label  >First Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={props.users.first_name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={props.users.last_name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue={props.users.email} />
            </Form.Group>
                 
        </div>
    );
};

export default ProfileView;
