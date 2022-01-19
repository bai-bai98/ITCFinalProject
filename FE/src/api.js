import axios from "axios";

const BaseUrl = 'http://localhost:5500';

// ------- users-api ------- //

//user - addUser
export async function addUser(signUpPrivateName, signUpLastName, signUpEmail, SignUpPhoneNumber, SignInPassword) {
    const newUserFE = {
        "firstName": signUpPrivateName,
        "lastName": signUpLastName,
        "phoneNumber": SignUpPhoneNumber,
        "email": signUpEmail,
        "password": SignInPassword
    }
    const response = await axios.post(`${BaseUrl}/users/signUp`, { ...newUserFE });
    return response.data
}

//user - loginUser
export async function loginUser(loggedInPassword, loggedInEmail) {
    const LoginData = {
        "email": loggedInEmail,
        "password": loggedInPassword,
    }
    const response = await axios.post(`${BaseUrl}/users/login`, { ...LoginData });
    return response.data
}