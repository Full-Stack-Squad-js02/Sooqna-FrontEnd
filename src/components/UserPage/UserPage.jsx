import React from 'react';
import MyProductLogo from '../../Assests/my-products-removebg-preview (1).png';
import MyOrderLogo from '../../Assests/my-orders-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../myProduct/product.css'


export default function UserPage() {
    const navigate = useNavigate();
    return (
        <>
            <Container fluid='sm' style={{ margin: ' 0 7rem' }} >
                <Row xs="2" >
                    <Col><img src={MyProductLogo} onClick={() => { navigate('/myproducts'); }} className='profile' /></Col>
                    <Col><img src={MyOrderLogo} onClick={() => { navigate('/myorders'); }} className='profile'/></Col>
                </Row>
                <Row xs="2" >
                    <Col><Button variant="danger" style={{
                        borderRadius: '25px',
                        fontWeight: '800',
                        height: '3.5rem',
                        width: '10rem',
                        boxShadow: '7px 4px black',
                        marginBottom: '3rem',
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
        </>
    )
}


