import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Card, Row, Button, FormLabel, FormSelect } from "react-bootstrap";

export default function Posts() {
    const [data,setData] = useState()

   async function fetchData() {
       try{
           const response = await axios.get("https://cleaner-app-api.herokuapp.com/posts/request")
         setData(response.data)
        
       }catch(err){
           console.log(err.response.data)
       }
    }
    function getRandomInt() {
        return Math.floor(Math.random() * (10000 - 5)) + 6;
      }
      
    useEffect(()=> {
        const setAllRequest = async()=> {
            await fetchData()
        }
     setAllRequest()
    },[])

    return <Row className=' App m-5'>
        {data !== undefined ? data.map((element,index) => <CleanerCard key={index} supplies={element.supplies} type={element.type} image={"https://source.unsplash.com/random/200x200?sig=1"} CleaningTime={element.CleaningTime} Price={element.Price}oven={element.oven} fridge={element.fridge} windows={element.windows} bathrooms={element.bathrooms} Bedrooms={element.Bedrooms}/> ): null}
        </Row>;
}

function CleanerCard(props){

    const {CleaningTime,supplies,Price,type, Bedrooms, image,windows,bathrooms,oven,fridge} = props
    
    return  <Col>
                <Card className='mb-2' style={{ width: '18rem' ,height:'30rem'}}>
                        <Card.Img variant="top"className=' m-2 w-25 rounded-circle' src={image} />
                        <Card.Body>
                            <Card.Title>{CleaningTime}</Card.Title>
                            <Card.Text>{type}({Bedrooms} Bedrooms) </Card.Text>
                            <Card.Text>Windows: {windows}</Card.Text>
                            <Card.Text>Bathroom: {bathrooms}</Card.Text>
                            <Card.Text>Oven: {oven}</Card.Text>
                            <Card.Text>Fridge: {fridge}</Card.Text>
                            <Card.Text>Supplies:{supplies}</Card.Text>
                            <Card.Title>${Price} <Button className='btn btn-secondary m-2'>Take</Button></Card.Title>
                        </Card.Body>
                    </Card>
            </Col>
}
