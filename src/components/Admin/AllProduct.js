import React, {useContext} from 'react';
import ProductAdmin from './ProductAdmin';
import {Container, Row} from 'react-bootstrap';
import { Context } from '../../context/context';
// import './product.css'

function AllProduct() {

    const states = useContext(Context);
    const products = states.products;
console.log( states.products)
    return (
        <>
            <h1 style={{
                marginTop: "9rem"
            }}>Products</h1>
            <Container fluid='sm' style={{
                margin: '2rem'
            }}>
                <Row xs="4">
                    {products
                        ? products.map((item, idx) => {
                            return (<ProductAdmin  product={item} key={idx}/>)
                        })
                        : null}
                </Row>
            </Container>
        </>
    )
};

export default AllProduct