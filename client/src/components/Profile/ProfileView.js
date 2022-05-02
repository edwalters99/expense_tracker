import React from 'react';
import {Form } from 'react-bootstrap';

const ProfileView = (props) => {
    console.log(props)
    return(
        <div>
           
            { props.users.map( (u) => <div key={ u.id } className="col-md-4 offset-md-4 bg-light p-3">
            <h3 className="bg-light">User Profile</h3>
            <Form.Group className="mb-3">
                <Form.Label  >First Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={u.first_name} />
           
                <Form.Label>Last Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue={u.last_name} />
          
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue={u.email} />
            </Form.Group>
                 </div>)
                 }
        </div>
    );
};

export default ProfileView;
