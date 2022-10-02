import React from 'react';
import {Card , Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css';


function MyProductCard(item) {
    // console.log(item.item);
    const navigate = useNavigate();
    return (
        <Card id='Card'>
            <Card.Img
                variant="top"
                src={item.item.image}/>
            <Card.Body>
                <Card.Title>{item.item.title}</Card.Title>
                <Card.Text>
                    {item.item.description}
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <Card.Title>Price</Card.Title>
                <Button variant="warning"onClick={() => { navigate('/updateproduct')}}>Update</Button> <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
);
}

export default MyProductCard;