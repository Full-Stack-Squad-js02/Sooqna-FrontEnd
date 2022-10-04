import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import {BsCartPlusFill} from "react-icons/bs";
import {Button} from 'react-bootstrap'
import {getOneProducts} from '../../api/api';
import { useParams } from 'react-router-dom';



export default function ProductCard() {

    // console.log();

    // const{itemId}=useParams();

    const [product , setProduct]=useState('');
    
    const showDetails=async()=>{
        let details= await getOneProducts(12);
        // console.log(details);
        setProduct(details);
    
    }
    useEffect(()=> {
        showDetails();
    },[]);
    // console.log(product);


    return (
        <>
            <div
                style={{
                display: 'flex',
                margin: '7rem 2rem'
            }}>
                <img
                    className="d-block w-100 h-1"
                    src= {product.image}
                    alt="First slide"/>
                <div style={{
                    margin: '0 5rem'
                }}>
                    <h2 style={{
                        color: 'gold'
                    }}>{product.title}
                    </h2>

                    <p style={{
                        margin: '2rem 0'
                    }}>

                        '{product.description}'
                    </p>
                    <h5
                        className='price'
                        style={{
                        margin: '1rem 0'
                    }}>{product.price}</h5>

                    {/* <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        <br/> */}
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                    <div style={{
                        margin: '1rem 0'
                    }}>
                        {/* <Link to='/products' className='btn'> Add to cart</Link>
         */}
                        <BsCartPlusFill
                            style={{
                            height: '1rem',
                            width: '1rem'
                        }}/> {/* <Link to='/products' className='btn'>
      back to products
        </Link> */}
                        <Button
                            variant="outline-dark"
                            style={{
                            margin: ' 0 1rem '
                        }}>Back</Button>
                    </div>
                </div>
            </div>
        </>
    )
}