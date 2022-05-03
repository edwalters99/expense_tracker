import React, { useEffect, useState } from 'react';
import ProfileView from './ProfileView';
import createRequest from '../../request';
import { Button } from 'react-bootstrap';

const Profile = (props) => {
    const [state, setState] = useState( {
        users: []
    });

    useEffect( () => {
        const fetchUser = () => {
            createRequest("/profile.json").then((response) => {
                console.log(response)
                setState({users: response});
            });
        };
        fetchUser();
    }, []);

    return (
            <div>
                <ProfileView view={ state } />
                <Button className="offset-md-4" variant="secondary" href="/profile/edit">Edit Profile</Button> 
            </div>
    )
}

export default Profile;
