import React from 'react';
import Typical from 'react-typical'
import styles from "./About.css"
import {
  MDBCard,
  MDBBadge,
  MDBBtn,
  MDBCardText,
  MDBTypography,
  MDBCardImage,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBRow
} from 'mdb-react-ui-kit';
import { height, width } from '@mui/system';

export default function App() {
  const text = 'Tommy Vercetti \n Carl Johnson'
  return (

    <>
<MDBRow>
  
    <MDBCol xl={4} className='mb-4'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJt7NZZNmzLt0l0-h0gpBUZm-I_8n0HNUyeRL4a2DLIs-76_5PTWi7CA2J0XpIHIqKN6E&usqp=CAU'
  style={{
    width:'401px',
    height:'340px',
    margin: '2rem 2rem' 
}}
  /> 
  </MDBCol>
  <MDBCol xl={5}>
  {/* <h1
  Class="cl"
  >Who We are</h1> */}
  <br/>
  <br/>
  
  <div className='profile-details-role'>
                      <span className='primary-text'>
                          {" "}
                          <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Welcome To Our Website",
                                3000,
                                "Full Stack Squad",
                                3000,
                                // "Contact with us to if you need the site.",
                                3000,
                                // "We have a multi services.",
                                3000,
                            ]}
                            />
                          </h1>
                          {/* <span className='profile-role-tagline'>
                              You Can see the group of the Developer that build this site and you can able to contact with him!
                          </span> */}

                      </span>

                  </div>

  <div className="font-loader"></div>
<div style={{fontFamily: 'Cursive', fontSize:'22px' }}>
  <span ><p>Nowadays, if you’re selling or buying anything—whether that’s sneakers, salad dressing, or something in between—you need to hop on board the ecommerce website train.</p>
  <br/>

    <p>This Multi-Store website offers the chance for buyers to explore variety of products, and sellers to build their brands and connect with more customers. </p>
  
{/* <p>you can go to the <a href="!#">contact</a> page if you have any comment or note!</p> */}
  </span>
  </div>
  </MDBCol>
  
  
  

</MDBRow>


<br/>
<br/>

 
<div class="col d-flex justify-content-center">
    <MDBRow>
       <MDBCol xl={4} >
        <MDBCard>
            <div class="col d-flex justify-content-center">
        <MDBCardImage
                    src={require('./AboutAssets/bnan.png')}
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '100px'
                }}/></div>
            
            <MDBTypography tag="h4">Bnan Zhran</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Full Stack Developer&RPA Developer
                <span className="mx-2">|</span>
                <a href="https://github.com/ebnanzhran">GitHub</a>
            </MDBCardText>
        </MDBCard>
        </MDBCol> 
     {/* { <MDBCol xl={6} className='mb-4'>
        <MDBCard>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src={require('./AboutAssets/bnan.png')}
                  alt='Bnan Zhran Photo'
                  style={{ width: '100px', height: '100px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Bnan Zhran</p>
                  <p className='text-muted mb-0'>Full-Stack Developer
                  <br/>
                  RPA Developer<br/>
                  Android Developer
                  </p>
                  <p className='text-muted mb-0'>b.zahran@xocialive.com</p>
                </div>
              </div>
              <MDBBadge pill color='success' light>
                Active
              </MDBBadge>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn href='https://github.com/ebnanzhran' color='link' rippleColor='primary' className='text-reset m-0'>
              GitHub <MDBIcon fas icon='fa-brands fa-github' />
            </MDBBtn>
           
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>} */}
      <MDBCol xl={4} className='mb-4'>
      <MDBCard>
            <div class="col d-flex justify-content-center">
        <MDBCardImage
                    src={require('./AboutAssets/Esraa.png')}
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '100px'
                }}/></div>
            
            <MDBTypography tag="h4">Esra`a Banat</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Full Stack Developer
                <span className="mx-2">|</span>
                <a href="https://github.com/EsraaBanat">GitHub</a>
            </MDBCardText>
        </MDBCard>
      </MDBCol>
      <MDBCol xl={4} className='mb-4'>
      <MDBCard>
            <div class="col d-flex justify-content-center">
        <MDBCardImage
                    src={require('./AboutAssets/shams.png')}
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '90px'
                }}/></div>
            
            <MDBTypography tag="h4">Shams Alsaraireh</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Full Stack Developer
                <span className="mx-2">|</span>
                <a href="https://github.com/shamssar">GitHub</a>
            </MDBCardText>
        </MDBCard>
      </MDBCol>
      
      <div class="col d-flex justify-content-center">
      <MDBCol xl={4} className='mb-4'>
      <MDBCard>
            <div class="col d-flex justify-content-center">
        <MDBCardImage
                    src={require('./AboutAssets/Ahmad.png')}
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '100px'
                }}/></div>
            
            <MDBTypography tag="h4">Ahmad Amayreh</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Full Stack Developer
                <span className="mx-2">|</span>
                <a href="https://github.com/AhmadAmaireh">GitHub</a>
            </MDBCardText>
        </MDBCard>
      </MDBCol>
      
      <MDBCol xl={4}  
    //   style={{}}
      className='mb-4'>
        <MDBCard>
            <div class="col d-flex justify-content-center">
        <MDBCardImage
                    src={require('./AboutAssets/suhaib.png')}
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '100px'
                }}/></div>
            
            <MDBTypography tag="h4">Sohaib AL-Momani</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Full Stack Developer
                <span className="mx-2">|</span>
                <a href="https://github.com/SohaibAlmomani">GitHub</a>
            </MDBCardText>
        </MDBCard>
      </MDBCol>
      </div>
    </MDBRow>
    </div>
    
    <MDBTypography tag="h4">Coming Soon!</MDBTypography>
    
    <div class="ticker-container">
   <div class="ticker-tape">
      <div class="slide-track">
         <div class="slide"><img class="alignnone size-full wp-image-13024" src={require('./AboutAssets/visa.png')}alt="" width="250" height="60" /></div>
         <div class="slide"><img class="alignnone size-medium wp-image-13023" src={require('./AboutAssets/master.png')} alt="" width="250" height="60" /></div>
         <div class="slide"><img class="alignnone size-medium wp-image-13022" src={require('./AboutAssets/google.png')} alt="" width="250" height="60" /></div>
         <div class="slide"><img class="alignnone size-medium wp-image-13021" src={require('./AboutAssets/cliq.png')} alt="" width="250" height="60" /></div>
         <div class="slide"><img class="alignnone size-full wp-image-13020" src={require('./AboutAssets/paypal.png')} alt="" width="250" height="60" /></div>
         
      </div>
   </div>
</div>
    
    </>
  );
}







// import React from 'react';
// import {
//   MDBCardImage,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCardText,

//   MDBTypography
// } from 'mdb-react-ui-kit';


// export default function App() {
//   return (
//     <MDBCarousel showControls showIndicators>


// <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={1}>
//        <div>
//             <div className="mt-3 mb-4">
//                 <MDBCardImage
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                     className="rounded-circle"
//                     fluid
//                     style={{
//                     width: '100px'
//                 }}/>
//             </div>
//             <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
//             <MDBCardText className="text-muted mb-4">
//                 @Programmer
//                 <span className="mx-2">|</span>
//                 <a href="#!">mdbootstrap.com</a>
//             </MDBCardText>
//         </div>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={2}
        
//       >
//       <div>
//             <div className="mt-3 mb-4">
//                 <MDBCardImage
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                     className="rounded-circle"
//                     fluid
//                     style={{
//                     width: '100px'
//                 }}/>
//             </div>
//             <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
//             <MDBCardText className="text-muted mb-4">
//                 @Programmer
//                 <span className="mx-2">|</span>
//                 <a href="#!">mdbootstrap.com</a>
//             </MDBCardText>
//         </div>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={3}
        
//       >
// <div>
//             <div className="mt-3 mb-4">
//                 <MDBCardImage
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                     className="rounded-circle"
//                     fluid
//                     style={{
//                     width: '100px'
//                 }}/>
//             </div>
//             <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
//             <MDBCardText className="text-muted mb-4">
//                 @Programmer
//                 <span className="mx-2">|</span>
//                 <a href="#!">mdbootstrap.com</a>
//             </MDBCardText>
//         </div>
      
//       </MDBCarouselItem>

      
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={4}>
//     <div>
//             <div className="mt-3 mb-4">
//                 <MDBCardImage
//                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
//                     className="rounded-circle"
//                     fluid
//                     style={{
//                     width: '100px'
//                 }}/>
//             </div>
//             <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
//             <MDBCardText className="text-muted mb-4">
//                 @Programmer
//                 <span className="mx-2">|</span>
//                 <a href="#!">mdbootstrap.com</a>
//             </MDBCardText>
//         </div>
//       </MDBCarouselItem>

    
//     </MDBCarousel>
//   );
// }








// // export default function App() {
// //   return (
// //     <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
// //       <MDBCol>
// //         <MDBCard>
// //           <MDBCardImage
// //             src='https://mdbootstrap.com/img/new/standard/city/041.webp'
// //             alt='...'
// //             position='top'
// //           />
// //           <MDBCardBody>
// //             <MDBCardTitle>Card title</MDBCardTitle>
// //             <MDBCardText>
// //               This is a longer card with supporting text below as a natural lead-in to additional content.
// //               This content is a little bit longer.
// //             </MDBCardText>
// //           </MDBCardBody>
// //         </MDBCard>
// //       </MDBCol>
// //       <MDBCol>
// //         <MDBCard>
// //           <MDBCardImage
// //             src='https://mdbootstrap.com/img/new/standard/city/042.webp'
// //             alt='...'
// //             position='top'
// //           />
// //           <MDBCardBody>
// //             <MDBCardTitle>Card title</MDBCardTitle>
// //             <MDBCardText>
// //               This is a longer card with supporting text below as a natural lead-in to additional content.
// //               This content is a little bit longer.
// //             </MDBCardText>
// //           </MDBCardBody>
// //         </MDBCard>
// //       </MDBCol>
// //       <MDBCol>
// //         <MDBCard>
// //           <MDBCardImage
// //             src='https://mdbootstrap.com/img/new/standard/city/043.webp'
// //             alt='...'
// //             position='top'
// //           />
// //           <MDBCardBody>
// //             <MDBCardTitle>Card title</MDBCardTitle>
// //             <MDBCardText>
// //               This is a longer card with supporting text below as a natural lead-in to additional content.
// //               This content is a little bit longer.
// //             </MDBCardText>
// //           </MDBCardBody>
// //         </MDBCard>
// //       </MDBCol>
// //       <MDBCol>
// //         <MDBCard>
// //           <MDBCardImage
// //             src='https://mdbootstrap.com/img/new/standard/city/044.webp'
// //             alt='...'
// //             position='top'
// //           />
// //           <MDBCardBody>
// //             <MDBCardTitle>Card title</MDBCardTitle>
// //             <MDBCardText>
// //               This is a longer card with supporting text below as a natural lead-in to additional content.
// //               This content is a little bit longer.
// //             </MDBCardText>
// //           </MDBCardBody>
// //         </MDBCard>
// //       </MDBCol>
// //     </MDBRow>
// //   );
// // }




// ///////****************************************************************************************************************************///////

// // import React from 'react';
// // import {
// //     MDBCardText,
// //     MDBCardImage,
// //     MDBTypography
  
// // } from 'mdb-react-ui-kit';
// // import { padding } from '@mui/system';


// //  export default function Testsuit() {
// //     const myStyle = {
// //         color: "white",
// //         backgroundColor: "DodgerBlue",
// //         padding: "100px",
// //         fontFamily: "Sans-Serif"
       
// //       };
// //     return (
// //         <div>
// //            <p style={myStyle}>welcome to our page,
// // We will give you an overview of our product and how the idea came out
// // We are a group of 5 people taking a course.

// // The basis of the idea was the beginning of the college, where they asked us to do a project to prove capabilities

// // We chose this type of project because people wanted it lately</p>

// // <H1>
// //     Here we Will Show to you our Developer how build this site...
// // </H1>

// //         </div>




// //     )
// // }

