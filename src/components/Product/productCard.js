// import React from 'react';

// import ProductImages from '../ProductImages';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const ProductCard = () => {
  
//   return (
//     <Wrapper>
     
//       <div className='section section-center page'>
//       <Link to='/products' className='btn'>
//           back to products
//         </Link>

//         <div className='product-center'>
//         <ProductImages  />

//           <section className='content'>
//             <h2>product Name </h2>

//             <h5 className='price'>price$</h5>
//             <p className='info'>

//             <span>description : </span>

//               <p> <span>Rating : </span>
//               <span></span>
//                           <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//                  </p>       
//             </p>
             

           
//             <hr />
//             <Link to='/products' className='btn'>
// Add to cart        </Link>
//           </section>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.main`
//   .product-center {
//     display: grid;
//     gap: 4rem;
//     margin-top: 2rem;
//   }
//   .price {
//     color: var(--clr-primary-5);
//   }
//   .desc {
//     line-height: 2;
//     max-width: 45em;
//   }
//   .info {
//     text-transform: capitalize;
//     width: 300px;
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     span {
//       font-weight: 700;
//     }
//   }
//   @media (min-width: 992px) {
//     .product-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//     }
//     .price {
//       font-size: 1.25rem;
//     }
//   }
// `;




// export default ProductCard;

import React from 'react'
import Rating from '@mui/material/Rating';
import { BsCartPlusFill } from "react-icons/bs";
import {Button} from 'react-bootstrap'

export default function productCard() {
  return (
<>


<div style={{display:'flex', margin: '7rem 2rem'}}> 
      <img
          className="d-block w-100 h-1"
          src="https://image.shutterstock.com/image-vector/url-app-icon-button-600w-1795018324.jpg"
          alt="First slide"
        />
<div style={{margin:'0 5rem'}}>
<h2 style={{color:'gold'}}>product Name </h2>

        <p style={{margin:'2rem 0'}}> 

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <h5 className='price' style={{margin:'1rem 0'}}>price$</h5>

        {/* <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        <br/> */}
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
        <div style={{margin:'1rem 0'}}>
        {/* <Link to='/products' className='btn'> Add to cart</Link>
         */}
         <BsCartPlusFill style={{height:'1rem' , width:'1rem'}} />
        {/* <Link to='/products' className='btn'>
      back to products
        </Link> */}
        <Button variant="outline-dark" style={{margin:' 0 1rem '}} >Back</Button>
        </div>
        </div>
        </div>
       
</>
  )
}