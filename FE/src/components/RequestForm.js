import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel, FormSelect } from "react-bootstrap";
import { useAuth } from "../context/auth";
import { addCleaningRequest } from "./lib/api"

function Request() {
  const auth = useAuth();
  const [message, setMessage] = useState("")
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
  }

  const addNewRequest = async (event) => {
    const authToken = auth.token.data ? auth.token.data.token : auth.token;
    event.preventDefault();

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

    const requestAdded = await addCleaningRequest(Request, authToken);
    alert(" added successfully");
  };

  return (
    <div>
      <Container className="formContainer">
        <Card>
          <Form onSubmit={addNewRequest}>
            <h3 className="addPetText">Request a Cleaner</h3>
            <Form.Group>
              <Form.Label>
                Type of House
                <select
                  className="inputField"
                  name="type"
                  onChange={handleChange}
                  value={request.type}
                >
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Duplex">Duplex</option>
                </select>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Number of Bedrooms{" "}
                <input
                  className="inputField"
                  type="number"
                  value={request.Bedrooms}
                  name="Bedrooms"
                  onChange={handleChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Number of Bathrooms
                <input
                  className="inputField"
                  type="number"
                  value={request.bathrooms}
                  name="bathrooms"
                  onChange={handleChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
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
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
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
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
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
              </Form.Label>{" "}
            </Form.Group>
            <Form.Group>
              <Form.Label>
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
              </Form.Label>
            </Form.Group>
            <Button className="add" onClick={(e) => { setMessage("Request added successfully") }}> Submit</Button>
            <br></br>
            {message}
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Request;
