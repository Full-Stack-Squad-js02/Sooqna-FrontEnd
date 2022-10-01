import React from 'react'
import WishlistCard from './WishlistCard'
import { Container, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Wishlist() {
  return (
    
 <>
    <h1 style={{marginTop:"3rem"}}>My Wishlist</h1>
    <Container fluid='sm' style={{ margin: '2rem' }}>
     <Row xs="4">
            <Col><WishlistCard/></Col>
            <Col><WishlistCard/></Col>
            <Col><WishlistCard/></Col>
           <Col><WishlistCard/></Col>
      </Row>
     </Container>
</>
  )
}
