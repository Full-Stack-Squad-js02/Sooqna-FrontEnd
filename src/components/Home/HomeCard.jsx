// import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../../auth';
import {BsCartPlus} from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addToFavourite ,removeFromFavourite, addToCart , removeFromCart} from '../../api/api';


import './Home.css';





export default function HomeCard ({ product }) {
    const navigate = useNavigate();
     const {user, token} = isAuthenticated();
    // console.log(product);
    return (
        <>
        <Card id='Card'>
                <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                    <Card.Title>Price : {product.price }</Card.Title>
                
                {isAuthenticated()?
                    <>
                        < MdOutlineFavoriteBorder className="icons"onClick={()=>addToFavourite(product.id,token)}/>
                        <BsCartPlus className="icons" onClick={()=>addToCart(product.id,token)}/>
                    </>
                    : <Button variant="primary" onClick={() => navigate('/viewdetails')}>View Details</Button>}
            </Card.Body>
            </Card>
        </>
    );
                }
            