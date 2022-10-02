import React, {useEffect, useState} from 'react';
import MyProductCard from './myProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import {getAllProductPostedByUser} from '../../api/api'
import {isAuthenticated} from '../../auth'
// import './product.css'

function MyProducts() {

    const {token, user} = isAuthenticated();

    const [items,
        setItems] = useState([])

    const allPostedProducts = async() => {
        let postedProducts = await getAllProductPostedByUser(user.id, token);
        setItems(postedProducts);
    }

    // console.log('UUUUU', items);

    useEffect(() => {
        allPostedProducts();
    }, [])

    return (
        <>
            <h1 style={{
                marginTop: "3rem"
            }}>My Product</h1>
            <Container fluid='sm' style={{
                margin: '2rem'
            }}>
                <Row xs="4">
                    {items
                        ? items.map((item, idx) => {
                            return (<MyProductCard item={item}/>)
                        })
                        : null}
                </Row>
            </Container>
        </>
    )
};

export default MyProducts