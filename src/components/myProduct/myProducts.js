import React from 'react';
import MyProductCard from './myProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './product.css'

function MyProducts() {
return(
<>
<h1 style={{marginTop:"3rem"}}>My Product</h1>
<Container fluid='sm' style={{ margin: '2rem' }}>
<Row xs="4">
    <Col><MyProductCard/></Col>
    <Col><MyProductCard/></Col>
    <Col><MyProductCard/></Col>
    <Col><MyProductCard/></Col>
</Row>
</Container>
</>
)
};

export default MyProducts