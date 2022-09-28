import React from 'react'
import WishlistCard from './WishlistCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Wishlist() {
  return (
    <div>Wishlist</div>
 <>

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
