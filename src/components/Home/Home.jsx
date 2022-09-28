import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import SlideShow from './SlideShow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import { getAllProducts } from '../../api/api';

function OrderingExample() {
    const [products, setProducts] = useState([]);
    // const x = getAllProducts();
    console.log('oooooo', products);
    // console.log('oooooo',getAllProducts());
    //	true | "sm" | "md" | "lg" | "xl" | "xxl"
    useEffect(() => {
        setProducts(getAllProducts());
    }, [products])
    return (
        <>
            <SlideShow />
            {/* {products ? products.map(() => { <h2>HI</h2> } ):null} */}
            <Container fluid='sm' style={{ margin: '2rem' }}>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
                <Row xs="4">
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                    <Col><HomeCard/></Col>
                </Row>
            </Container>
        </>
    );
}

export default OrderingExample;
