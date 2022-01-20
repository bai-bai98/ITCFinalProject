// import React, { useState } from 'react';
// import { Button, Card, Container, Form } from "react-bootstrap";
// import { editCleaningRequest } from '../lib/api';
// import { useAuth } from "../context/auth";

// function EditPost() {

//   const auth = useAuth();
//   const [request, setRequest] = useState({
//     id: "",
//     type: "",
//     Bedrooms: "",
//     bathrooms: "",
//     supplies: "",
//     oven: "",
//     windows: "",
//     fridge: "",
//   });

//   function handleChange(event) {
//     const value = event.target.value;
//     setRequest({
//       ...request,
//       [event.target.name]: value,
//     });
//   }

//   const editRequest = async (event) => {
//     const authToken = auth.token.data ? auth.token.data.token : auth.token;
//     event.preventDefault();

//     setRequest({
//       id: "",
//       type: "",
//       Bedrooms: "",
//       bathrooms: "",
//       supplies: "",
//       oven: "",
//       windows: "",
//       fridge: "",
//     });

//     const requestAdded = await editCleaningRequest(Request, authToken);
//     alert(" edit successfully");
//   };

//   return <div>

//     <Container className="formContainer">
//       <Card>
//         <Form onSubmit={editRequest}>
//           <h3 className="addPetText">Edit Post</h3>
//           <Form.Group>
//             <Form.Label>
//               Type of House
//               <select
//                 className="inputField"
//                 name="type"
//                 onChange={handleChange}
//                 value={request.type}
//               >
//                 <option value="House">House</option>
//                 <option value="Apartment">Apartment</option>
//                 <option value="Duplex">Duplex</option>
//               </select>
//             </Form.Label>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Number of Bedrooms{" "}
//               <input
//                 className="inputField"
//                 type="number"
//                 value={request.Bedrooms}
//                 name="Bedrooms"
//                 onChange={handleChange}
//               />
//             </Form.Label>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Number of Bathrooms
//               <input
//                 className="inputField"
//                 type="number"
//                 value={request.bathrooms}
//                 name="bathrooms"
//                 onChange={handleChange}
//               />
//             </Form.Label>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Do you have cleaning supplies
//               <select
//                 className="inputField"
//                 name="supplies"
//                 onChange={handleChange}
//                 value={request.supplies}
//               >
//                 <option>yes</option>
//                 <option>no</option>
//               </select>
//             </Form.Label>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Clean Oven
//               <select
//                 className="inputField"
//                 name="oven"
//                 onChange={handleChange}
//                 value={request.oven}
//               >
//                 <option>yes</option>
//                 <option>no</option>
//               </select>
//             </Form.Label>
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Clean Windows
//               <select
//                 className="inputField"
//                 name="windows"
//                 onChange={handleChange}
//                 value={request.windows}
//               >
//                 <option>yes</option>
//                 <option>no</option>
//               </select>
//             </Form.Label>{" "}
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>
//               Clean Fridge
//               <select
//                 className="inputField"
//                 name="fridge"
//                 onChange={handleChange}
//                 value={request.fridge}
//               >
//                 <option>yes</option>
//                 <option>no</option>
//               </select>
//             </Form.Label>
//           </Form.Group>
//           <Button className="add"> Submit</Button>
//         </Form>
//       </Card>
//     </Container>



//   </div>;
// }

// export default EditPost;
