import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './navBar.css'

export default function NavBar(props) {
    const { setShowLoginModal, setUserAuthorization, userAuthorization } = props
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Cleanup</Navbar.Brand>
                    <Nav className="nav"> 
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/request">Request a Cleanup</Nav.Link>
                        <Nav.Link as={Link} to="/Posts">Posts</Nav.Link>
                        {userAuthorization === "guest" ?
                            <Button variant="outline-primary" className="login" onClick={(e) => { setShowLoginModal(true) }}>SignUp/Login</Button>
                            :
                            <Button variant="outline-primary" className="login" onClick={(e) => { setUserAuthorization("guest") }}>logOut</Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
