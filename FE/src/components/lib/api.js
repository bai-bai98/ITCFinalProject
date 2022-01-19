import axios from "axios";

const BaseUrl = "https://cleaner-app-api.herokuapp.com/posts";
function getAuthConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

export async function addCleaningRequest(request, token) {
  const response = await axios.post(
    `${BaseUrl}/`,
    {
      type: request.type,
      Bedrooms: request.Bedrooms,
      bathrooms: request.bathrooms,
      supplies: request.supplies,
      oven: request.oven,
      windows: request.windows,
      fridge: request.fridge,
    },
    getAuthConfig(token)
  );
  return response.data;
}

export async function addUser(signUpPrivateName, signUpLastName, signUpEmail, SignUpPhoneNumber, SignInPassword) {
  const newUserFE = {
    "firstName": signUpPrivateName,
    "lastName": signUpLastName,
    "phoneNumber": SignUpPhoneNumber,
    "email": signUpEmail,
    "password": SignInPassword
  }
  const response = await axios.post(`https://cleaner-app-api.herokuapp.com/users/signup`, { ...newUserFE });
  return response.data
}

export async function loginUser(loggedInPassword, loggedInEmail) {
  const LoginData = {
    "email": loggedInEmail,
    "password": loggedInPassword,
  }
  const response = await axios.post(`https://cleaner-app-api.herokuapp.com/users/login`, { ...LoginData });
  return response.data
}