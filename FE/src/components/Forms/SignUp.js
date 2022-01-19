import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import './signUp.css'


export default function SignUp(props) {
    const { signUpPrivateName, setSignUpPrivateName, signUpLastName, setSignUpLastName, signUpEmail, setSignUpEmail, SignUpPhoneNumber, setSignUpPhoneNumber, SignInPassword, setSignInPassword, ValdiateSignUpPassword, setValdiateSignUpPassword, registrationMessage } = props
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="signUpInput" column sm="2">
                    First Name:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Enter your first name here" value={signUpPrivateName} onChange={(event) => { setSignUpPrivateName(event.target.value) }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="signUpInput" column sm="2">
                    Last Name:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Enter your last name here" value={signUpLastName} onChange={(event) => { setSignUpLastName(event.target.value) }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email:
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="Enter your Email address here" value={signUpEmail} onChange={(event) => { setSignUpEmail(event.target.value) }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="signUpInput" column sm="2">
                    Phone Number:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" placeholder="Enter your phone number here" value={SignUpPhoneNumber} onChange={(event) => { setSignUpPhoneNumber(event.target.value) }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Password:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Enter your password here" value={SignInPassword} onChange={(event) => { setSignInPassword(event.target.value) }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Password:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password confirmation" value={ValdiateSignUpPassword} onChange={(event) => { setValdiateSignUpPassword(event.target.value) }} />
                </Col>
                <br></br>
                {registrationMessage && registrationMessage}
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Password:
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password confirmation" value={ValdiateSignUpPassword} onChange={(event) => { setValdiateSignUpPassword(event.target.value) }} />
                </Col>
                <br></br>
                {registrationMessage && registrationMessage}
            </Form.Group>
        </div>
    )
}

