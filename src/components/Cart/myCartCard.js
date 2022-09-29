import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import IncDecCounter from "./Counter";

function MyCartCard() {
  return (
    <Card id='cartCard'>
      <Card.Img variant="top" src="https://source.unsplash.com/random?product" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <IncDecCounter/>
        <Card.Title>Price</Card.Title>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card >
  );
}

export default MyCartCard;
