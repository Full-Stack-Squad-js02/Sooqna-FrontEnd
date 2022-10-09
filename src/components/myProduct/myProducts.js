import React, {useContext} from 'react';
import MyProductCard from './myProductCard';
import {Container, Row} from 'react-bootstrap';
import { Context } from '../../context/context';
// import './product.css'

function MyProducts() {

    const states = useContext(Context);
    const myItems = states.myItems;

    return (
        <>
            <h1 style={{
                marginTop: "10rem"
            }}>My Product</h1>
            <Container fluid='sm' style={{
                marginLeftt: '2rem'
            }}>
                <Row xs="4">
                    {myItems
                        ? myItems.map((item, idx) => {
                            return (<MyProductCard product={item} key={idx}/>)
                        })
                        : null}
                </Row>
            </Container>
        </>
    )
};

export default MyProducts