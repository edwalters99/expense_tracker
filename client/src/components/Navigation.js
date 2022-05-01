import React from 'react';
import {Container, Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Expense Trackr</Navbar.Brand>
                <Nav className="mr-auto ">class="text-right"
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#transactions">Transactions</Nav.Link>
                    <Nav.Link href="/categories">Categories</Nav.Link>
                    <Nav.Link href="/categories">Profile</Nav.Link>
                    <Nav.Link href="#logout">Log In</Nav.Link>
                    <Nav.Link href="#login">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    );
}

export default Navigation;