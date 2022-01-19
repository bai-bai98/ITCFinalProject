import React, { useState } from "react";

function Request() {
  const [request, setRequest] = useState({
    id: "",
    type: "",
    Bedrooms: "",
    bathrooms: "",
    supplies: "",
    oven: "",
    windows: "",
    fridge: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setRequest({
      ...request,
      [event.target.name]: value,
    });
    console.log(setRequest);
  }

  const addNewPet = async (event) => {
    const formData = new FormData();

    setRequest({
      id: "",
      type: "",
      Bedrooms: "",
      bathrooms: "",
      supplies: "",
      oven: "",
      windows: "",
      fridge: "",
    });
  };

  return (
    <div>
      <form onSubmit={addNewPet} className="AddPetPage">
        <h3 className="addPetText">Request a Cleaner</h3>
        <label>
          Type of House
          <select
            className="inputField"
            name="type"
            onChange={handleChange}
            value={request.type}
          >
            <option value="Adopted">House</option>
            <option value="Fostered">Apartment</option>
            <option value="Available">Duplex</option>
          </select>
        </label>
        <label>
          Number of Bedrooms{" "}
          <input
            className="inputField"
            type="text"
            value={request.Bedrooms}
            name="Bedrooms"
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Bathrooms
          <input
            className="inputField"
            type="number"
            value={request.bathrooms}
            name="bathrooms"
            onChange={handleChange}
          />
        </label>
        <label>
          Do you have cleaning supplies
          <select
            className="inputField"
            name="supplies"
            onChange={handleChange}
            value={request.supplies}
          >
            <option>yes</option>
            <option>no</option>
          </select>
        </label>
        <label>
          Clean Oven
          <select
            className="inputField"
            name="oven"
            onChange={handleChange}
            value={request.oven}
          >
            <option>yes</option>
            <option>no</option>
          </select>
        </label>
        <label>
          Clean Windows
          <select
            className="inputField"
            name="windows"
            onChange={handleChange}
            value={request.windows}
          >
            <option>yes</option>
            <option>no</option>
          </select>
        </label>{" "}
        <label>
          Clean Fridge
          <select
            className="inputField"
            name="fridge"
            onChange={handleChange}
            value={request.fridge}
          >
            <option>yes</option>
            <option>no</option>
          </select>
        </label>
        <button className="addPetBtn">submit</button>
      </form>
    </div>
  );
}

export default Request;
