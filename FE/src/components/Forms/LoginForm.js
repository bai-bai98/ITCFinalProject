
import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default function LoginForm(props) {
    const { loggedInPassword, setLoggedInPassword, setLoggedInEmail, loggedInEmail, errorMessageReLoginInput } = props
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Email" value={loggedInEmail} onChange={(event) => { setLoggedInEmail(event.target.value) }} required />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" value={loggedInPassword} onChange={(event) => setLoggedInPassword(event.target.value)} />
                </Col>
                <br></br>
                {errorMessageReLoginInput && errorMessageReLoginInput}
            </Form.Group>
        </div>
    )
}

