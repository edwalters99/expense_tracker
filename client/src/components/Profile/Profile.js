import React, { Component } from 'react';
import Navigation from '../Navigation';
import ProfileView from './ProfileView';
import ProfileUpdate from './ProfileUpdate';
import { Nav, Button } from 'react-bootstrap';

class Profile extends Component {
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
    }

    render() {
        return (
            <div>
                <ProfileView users={ this.state.users } />
                <Button className="offset-md-4" variant="secondary" href="/profile/edit">Edit Profile</Button> 
            </div>
        );
    }

}
export default Profile;
