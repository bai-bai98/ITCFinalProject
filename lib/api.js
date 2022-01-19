import axios from "axios";

const BaseUrl = "https://cleaner-app-api.herokuapp.com/posts";
function getAuthConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

const BaseUrlEdit = "https://cleaner-app-api.herokuapp.com/posts/edit/:id";
function getAuthConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

 async function addCleaningRequest (request, token) {
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

 async function editCleaningRequest (request, token) {
  const response = await axios.put(
    `${BaseUrlEdit}/`,
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

export {
  addCleaningRequest,
  editCleaningRequest
}