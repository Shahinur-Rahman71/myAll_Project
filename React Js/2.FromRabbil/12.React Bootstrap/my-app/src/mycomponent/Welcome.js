import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import './asset/bootstrap.min.css'

function Welcome(){

    return (
        <div className="App">
            <Navbar bg="info" variant="light">
                <Navbar.Brand className="text-light" href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-light" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-light" href="#features">Features</Nav.Link>
                    <Nav.Link className="text-light" href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className="text-light" variant="outline-dark">Search</Button>
                </Form>
            </Navbar>
        </div>
        
    )
}

export default Welcome;