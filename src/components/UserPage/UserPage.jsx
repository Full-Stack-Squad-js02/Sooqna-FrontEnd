import React from 'react';
import MyProductLogo from '../../Assests/my-products.png';
import MyOrderLogo from '../../Assests/my-orders.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../myProduct/product.css'


export default function UserPage() {
    const navigate = useNavigate();
    return (
        <>
            <Container fluid='sm' style={{ margin: ' 0 7rem' }} >
                <Row xs="2" >
                    <Col><img src={MyProductLogo} style={{cursor: 'pointer'}} onClick={() => { navigate('/myproducts'); }} /></Col>
                    <Col><img src={MyOrderLogo} style={{cursor: 'pointer'}} onClick={() => { navigate('/myorders'); }} /></Col>
                </Row>
                <Row xs="2" >
                    <Col><Button variant="danger" style={{
                        borderRadius: '25px',
                        fontWeight: '800',
                        height: '3.5rem',
                        width: '10rem',
                        boxShadow: '7px 4px black',
                        marginBottom: '3rem'
                    }}
                    onClick={() => { navigate('/product')}}
                    >Sell Now </Button></Col>
                    <Col>
                        <Button variant="danger" style={{
                        borderRadius: '25px',
                        fontWeight: '800',
                        height: '3.5rem',
                        width: '10rem',
                        boxShadow: '7px 4px black',
                        marginBottom: '3rem'
                        }}
                        onClick={() => { navigate('/')}}
                        >Shop Now</Button></Col>
                </Row>
            </Container>
            {/* <img src={MyProductLogo} onClick={() => { navigate('/myproducts'); }} /> */}
            {/* <img src={MyOrderLogo} onClick={() => { navigate('/myorders'); }} />
            <br/>
            <Button variant="danger" style={{
            borderRadius: '25px',
            fontWeight: '800',
            height: '3.5rem',
            width: '10rem',
            boxShadow: '7px 4px black',
            marginBottom:'3rem'
            }}>Sell Now </Button>
            <Button variant="danger" style={{
            borderRadius: '25px',
            fontWeight: '800',
            height: '3.5rem',
            width: '10rem',
            boxShadow: '7px 4px black',
            marginBottom:'3rem'
            }}>Shop Now</Button> */}
        </>
    )
}


