import React, { useState, useEffect } from 'react';
import createRequest from '../request';
import {Container, Navbar, Nav } from 'react-bootstrap';

function Navigation() {

    const [userDetails, setUserDetails] = useState({
        error: ''
    })

    useEffect( () => {
        console.log('fetching user')
        fetchUser()
    }, [])


    const fetchUser = () => {
        createRequest("/profile.json").then((response) => {
            setUserDetails(response);
            console.log(response)
        });
    };


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Expense Trackr</Navbar.Brand>
                <Nav className="mr-auto ">class="text-right"
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/transactions">Transactions</Nav.Link>
                    <Nav.Link href="/categories">Categories</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="#logout">Log In</Nav.Link>
                    <Nav.Link href="#login">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    );
}

export default Navigation;