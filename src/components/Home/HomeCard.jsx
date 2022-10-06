// import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../../auth';
import {BsCartPlus} from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import {getOneProducts} from '../../api/api'
// import { MDBRipple } from 'mdb-react-ui-kit';
import { addToFavourite ,addToCart } from '../../api/api';
import './Home.css';

export default function HomeCard({ product }) {
    
    const navigate = useNavigate();
    const [isFav,setIsFav]=useState(false)
    const { user, token } = isAuthenticated();
    
    return (
        <>
        <Card id='Card' style={{background:'whitesmoke'}}>
                <Card.Img variant="top" src={product.image} style={{height:'11.5rem',width:'97%'}}/>
            <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
            </Card.Body>
                <Card.Footer>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Card.Title>Price : {product.price}$</Card.Title>
                {isAuthenticated()?
                    <>
                            {isFav?
                                < MdOutlineFavorite className="icons" onClick={() => {
                                    // console.log('FAVVVVVVVVVV');
                                    // addToFavourite(product.id, token)
                                    setIsFav(false)
                                }} />
                                :
                                < MdOutlineFavoriteBorder className="icons" onClick={() => {
                                    addToFavourite(product.id, token)
                                    setIsFav(true)
                                }} />
                           }

                        <BsCartPlus className="icons" onClick={()=>addToCart(product.id,token)}/>
                    </>
                    : <Button variant="primary" onClick={() => {
                        getOneProducts(product.id);
                        navigate('/viewdetails')
                        }}>View Details</Button>}
                        </Card.Footer>
            </Card>
        </>
    );
                }
            