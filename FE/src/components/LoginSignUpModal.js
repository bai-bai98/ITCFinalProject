import React, { useState } from 'react';
import { Modal, Button, ButtonGroup, Form } from 'react-bootstrap'
import LoginForm from './Forms/LoginForm';
import SignUp from './Forms/SignUp';
import { addUser, loginUser } from './lib/api'


export default function LoginModal(props) {

    let { show, setShowLoginModal, setUserAuthorization, setUserData } = props


    const handleClose = () => {
        setShowLoginModal(false)
        setShowChosenForm("login")
        setLoggedInPassword("")
        setLoggedInEmail("")
        setSignUpPrivateName("")
        setSignUpLastName("")
        setSignUpEmail("")
        setSignUpPhoneNumber("")
        setSignInPassword("")
        setValidateSignUpPassword("")
        setRegistrationMessage("")
        setErrorMessageReLoginInput("")
        setRegistrationMessage("")
    };

    const [showChosenForm, setShowChosenForm] = useState("login")
    const [errorMessageReLoginInput, setErrorMessageReLoginInput] = useState("")


    const [loggedInPassword, setLoggedInPassword] = useState("")
    const [loggedInEmail, setLoggedInEmail] = useState("")
    const handleLogin = async (event) => {
        try {
            event.preventDefault()
            if (!loggedInEmail || !loggedInPassword) {
                setErrorMessageReLoginInput("One or more required fields are missing")
            } else if (!loggedInEmail.match(/^\S+@\S+\.\S+$/)) {
                setErrorMessageReLoginInput("Email address is not valid")
            } else {
                const authenticatedUser = await loginUser(loggedInPassword, loggedInEmail)
                if (authenticatedUser[0].authorization === "member" || authenticatedUser[0].authorization === "admin") {
                    sessionStorage.setItem('token', authenticatedUser[1]);
                    setUserData(authenticatedUser[0])
                    setUserAuthorization(authenticatedUser[0].authorization)
                    handleClose()
                    setLoggedInPassword("")
                    setLoggedInEmail("")
                }
            }
        } catch (e) {
            if (e.message === "Network Error") {
                setErrorMessageReLoginInput(e.message)
            } else {
                setErrorMessageReLoginInput(e.response.data)
            }
        }
    }

    const [signUpPrivateName, setSignUpPrivateName] = useState("")
    const [signUpLastName, setSignUpLastName] = useState("")
    const [signUpEmail, setSignUpEmail] = useState("")
    const [SignUpPhoneNumber, setSignUpPhoneNumber] = useState("")
    const [SignInPassword, setSignInPassword] = useState("")
    const [ValdiateSignUpPassword, setValidateSignUpPassword] = useState("")
    const [registrationMessage, setRegistrationMessage] = useState("")
    const handleSignUp = async (event) => {
        try {
            event.preventDefault()
            if (!signUpPrivateName || !signUpLastName || !signUpEmail || !SignUpPhoneNumber || !SignInPassword || !ValdiateSignUpPassword) {
                setRegistrationMessage("One or more required fields are missing")
            } else if (!signUpEmail.match(/^\S+@\S+\.\S+$/)) {
                setRegistrationMessage("Email address is not valid")
            } else if (SignUpPhoneNumber.length < 8 || SignUpPhoneNumber.length > 12) {
                setRegistrationMessage("Invalid phone number")
            } else if (SignInPassword !== ValdiateSignUpPassword) {
                setRegistrationMessage("Password confirmation must match Password")
            } else {
                const message = await addUser(signUpPrivateName, signUpLastName, signUpEmail, SignUpPhoneNumber, SignInPassword)
                setRegistrationMessage(message)
                console.log("1")
                if (message === "Registration completed successfully") {
                    const authenticatedUser = await loginUser(SignInPassword, signUpEmail)
                    sessionStorage.setItem('token', authenticatedUser[1]);
                    setUserData(authenticatedUser[0])
                    setUserAuthorization(authenticatedUser[0].authorization);
                    handleClose()
                }
            }
        }
        catch (e) {
            if (e.message === "Request failed with status code 400") {
                setRegistrationMessage(e.response.data)
            } else {
                setRegistrationMessage(e.message)
            }
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={(event) => { setShowChosenForm("login"); setRegistrationMessage("") }}>Login</Button>
                    <Button variant="secondary" onClick={(event) => { setShowChosenForm("SignUp"); setRegistrationMessage(""); setErrorMessageReLoginInput("") }}>Sign-Up</Button>
                </ButtonGroup></Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    {showChosenForm === "login" ?
                        <LoginForm loggedInPassword={loggedInPassword} setLoggedInPassword={setLoggedInPassword} loggedInEmail={loggedInEmail} setLoggedInEmail={setLoggedInEmail} errorMessageReLoginInput={errorMessageReLoginInput} />
                        :
                        <SignUp signUpPrivateName={signUpPrivateName} setSignUpPrivateName={setSignUpPrivateName} signUpLastName={signUpLastName} setSignUpLastName={setSignUpLastName} signUpEmail={signUpEmail} setSignUpEmail={setSignUpEmail} SignUpPhoneNumber={SignUpPhoneNumber} setSignUpPhoneNumber={setSignUpPhoneNumber} SignInPassword={SignInPassword} setSignInPassword={setSignInPassword} ValdiateSignUpPassword={ValdiateSignUpPassword} setValdiateSignUpPassword={setValidateSignUpPassword} registrationMessage={registrationMessage} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {showChosenForm === "login" ?
                        <Button variant="primary" onClick={handleLogin} type="submit">
                            Login
                        </Button>
                        :
                        <Button variant="primary" onClick={handleSignUp} type="submit">
                            Sign-Up
                        </Button>

                    }
                </Modal.Footer>
            </Form>
        </Modal >
    )
}


