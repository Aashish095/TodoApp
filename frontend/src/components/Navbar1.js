import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Navbar1 = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Navbar1
