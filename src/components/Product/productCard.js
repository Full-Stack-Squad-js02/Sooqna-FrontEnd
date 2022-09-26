import React from 'react';

import ProductImages from '../ProductImages';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  
  return (
    <Wrapper>
     
      <div className='section section-center page'>
      <Link to='/products' className='btn'>
          back to products
        </Link>

        <div className='product-center'>
        <ProductImages  />

          <section className='content'>
            <h2>product Name </h2>

            <h5 className='price'>price$</h5>
            <p className='info'>

            <span>description : </span>

              <p> <span>Rating : </span>
              <span></span>
                          <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                 </p>       
            </p>
             

           
            <hr />
            <Link to='/products' className='btn'>
Add to cart        </Link>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default ProductCard;
