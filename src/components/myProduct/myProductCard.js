import React from 'react';
import {Card , Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

function MyProductCard() {
  
    return (
        <Card id='productCard'>
            <Card.Img
                variant="top"
                src="https://source.unsplash.com/random?product"/>
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <Card.Title>Price</Card.Title>
                <Button variant="primary">Update</Button> <Button variant="primary">Delete</Button>
            </Card.Body>
        </Card>
);
}

export default MyProductCard;