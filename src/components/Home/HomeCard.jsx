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
import './HomeCard.css';

export default function HomeCard({ product }) {
    
    const navigate = useNavigate();
    const [isFav,setIsFav]=useState(false)
    const { user, token } = isAuthenticated();
    
    // console.log(product);

    return (
        <>
        {/* <Card id='Card' style={{background:'whitesmoke'}}>
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
            </Card> */}
            <ul>
                <li class="booking-card" style={{backgroundImage: `url(${product.image})`, marginTop: '8rem'}}>
                    <div class="book-container">
                        <div class="content">
                            <button class="btn">View Details</button>
                        </div>
                    </div>
                    <div class="informations-container">
                        <h2 class="title">{product.title}</h2>
                        <p class="sub-title"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/></p>
                        <p class="price"><svg class="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                        </svg>{product.price} $</p>
                        <div class="more-information">
                            <div class="info-and-date-container">
                                < MdOutlineFavorite className="icons" />
                                <BsCartPlus className="icons" />
                            </div>
                            <p class="disclaimer">{product.description}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
                }
            