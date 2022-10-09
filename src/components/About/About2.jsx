import React from 'react';
import Container from "react-bootstrap/Container";
//  import Typical from 'react-typical'
import styles from "./About.css"
import {
  MDBTypography,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { height, width } from '@mui/system';
import AboutCards from './AboutCards';

export default function App() {
  return (

      <>
          <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem' }} >
              {/* <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent:'center'
              }}
              >
                          <p style={{
                              fontSize: '30px',
                      fontFamily: 'inherit',
                      fontWeight: '600',
    width: '50%',
    margin: '5rem -11rem 0px 0px',
    color: 'grey',
    padding: '60px 40px 0px 0rem',
    zIndex: 0,
    textAlign:'justify'
                          }}>Nowadays, if you’re selling or buying anything whether that’s sneakers, salad dressing, or something in between you need to hop on board the ecommerce website train.
                              
                              This Multi-Store website offers the chance for buyers to explore variety of products, and sellers to build their brands and connect with more customers.
                         </p>
                  <img src='https://cdn.shopify.com/s/files/1/0090/9236/6436/articles/Best_Shopify_e-Commerce_About_Us_Page_Template.png?v=1631674846'
                      style={{
                          width: '69%',
                          height: '30rem',
                          margin: '6rem -7rem 3rem -4rem'
                  }}
                  />
              </div> */}
        <MDBRow style={{ marginBottom: '5rem'}}>
  
    <MDBCol xl={4} className='mb-4'>
  <img src={require('./AboutAssets/about.png')} 
  style={{
    width: '596px',
    height: 'auto',
    margin: '6rem 0 0 0',
}}
  /> 
  </MDBCol>
          <MDBCol xl={5} style={{ marginLeft: '16rem' }}>
  <br/>
  <br/>
  <div className="font-loader"></div>
            <div class="cl3" >
              <span ><p style={{ margin: '0 - 10rem' }}>Nowadays, if you’re selling or buying anything—whether that’s sneakers, salad dressing, or something in between you need to hop on board the ecommerce website train.</p>
  <br/>

                <p style={{ margin: '0 - 10rem' }}>This Multi-Store website offers the chance for buyers to explore variety of products, and sellers to build their brands and connect with more customers. </p>
    </span>
  </div>
  </MDBCol>
  
  
  

              </MDBRow>
              <h2>Who We Are ?</h2>
              <p> We are Full Stack Squad group of 5 passionate software Developers established at Aug 2022 to initiate build websites to serve different goals </p>
              <p>Get to know us more below and please feel free to get in touch any time.</p>

<AboutCards/>



<br/>
<br/>

 

    {/* <MDBTypography tag="h4">Coming Soon!</MDBTypography> */}
    
    {/* <div className="ticker-container">
   <div className="ticker-tape">
      <div className="slide-track">
         <div className="slide"><img className="alignnone size-full wp-image-13024" src={require('./AboutAssets/visa.png')}alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13023" src={require('./AboutAssets/master.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13022" src={require('./AboutAssets/google.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13021" src={require('./AboutAssets/cliq.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-full wp-image-13020" src={require('./AboutAssets/paypal.png')} alt="" width="250" height="60" /></div>
         
      </div>
   </div>
</div> */}
</Container>
    </>
  );
}

