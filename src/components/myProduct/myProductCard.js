import React from 'react';
import {Card , Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { removeOneMyProduct } from '../../api/api';
import { isAuthenticated } from '../../auth';


import '../Home/Home.css';


function MyProductCard(item) {
    const { token } = isAuthenticated();

    const navigate = useNavigate();
    return (
        <Card id='Card' style={{background:'whitesmoke'}}>
            <Card.Img
                variant="top"
                src={item.item.image} style={{height:'11rem',width:'97%'}}/>
            <Card.Body>
                <Card.Title>{item.item.title}</Card.Title>
                <Card.Text>
                    {item.item.description}
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
            </Card.Body>
            <Card.Footer>
                <Card.Title>Price</Card.Title>
                <Button variant="warning"onClick={() => { navigate('/updateproduct')}}>Update</Button> <Button variant="danger" onClick={() => {removeOneMyProduct(item.item.id,token) }}>Delete</Button>
            </Card.Footer>
            
        </Card>
);
}

export default MyProductCard;