import React, { Component } from 'react';
import Navigation from '../Navigation';
import ProfileView from './ProfileView';
import ProfileUpdate from './ProfileUpdate';
import createRequest from '../../request';
import { Nav, Button } from 'react-bootstrap';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        console.log(this.state.users)
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
