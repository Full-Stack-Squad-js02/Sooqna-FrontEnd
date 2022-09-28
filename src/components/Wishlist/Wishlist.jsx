import React from 'react'
import WishlistCard from './WishlistCard'
import { Container, Button, PageHeader } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Wishlist() {
  return (
    
 <>

    <Container fluid='sm' style={{ margin: '2rem' }}>
     <Row xs="4">
            <Col><WishlistCard/></Col>
            <Col><WishlistCard/></Col>
            <Col><WishlistCard/></Col>
           <Col><WishlistCard/></Col>
      </Row>
     </Container>
     <Button style={{ marginBottom: "2rem", width: "11rem", height: "3.5rem", fontSize: "1.5rem" }} variant="success">Create Order</Button>

</>
  )
}
