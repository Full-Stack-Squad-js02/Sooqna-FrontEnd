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
<MDBRow>
  
    <MDBCol xl={4} className='mb-4'>
  <img src={require('./AboutAssets/about.png')} 
  style={{
    width:'500px',
    height:'500px',
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


  <div className="font-loader"></div>
<div class="cl3">
  <span ><p>Nowadays, if you’re selling or buying anything—whether that’s sneakers, salad dressing, or something in between—you need to hop on board the ecommerce website train.</p>
  <br/>

    <p>This Multi-Store website offers the chance for buyers to explore variety of products, and sellers to build their brands and connect with more customers. </p>
  
{/* <p>you can go to the <a href="!#">contact</a> page if you have any comment or note!</p> */}
  </span>
  </div>
  </MDBCol>
  
  
  

</MDBRow>


    {/* <div class="team-boxed" >
      
         <div className="col d-flex justify-content-center">
            <div class="intro">
                <h2 class="text-center">Team </h2>
                <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div></div> 
            <div className="col d-flex justify-content-center"> 
            <div class="row people">
           
                <div class="col-md-6 col-lg-4 item">
                    <div class="box" style={{width:"400px" , height:"600px"}}><img class="rounded-circle" src={require('./AboutAssets/bnan.png')}></img>
                        <h3 class="name">Bnan Zhra</h3>
                        <p class="title">FullStack Developer&RPA Developer</p>
                        <p class="description">Graduated from Zarqa University ,he have 23 Years old ,he have Strong Knowledg in Problem solving and Robotics aoutomation and he have Some experiancein Android Development.</p>
                        <div class="social">
                        <a href="https://github.com/ebnanzhran"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/eng-bnan-zhran-8679b0202/"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box" style={{width:"400px" , height:"600px"}}><img class="rounded-circle" src={require('./AboutAssets/Esraa.png')}></img>
                        <h3 class="name">Esra`a Banat</h3>
                        <p class="title">FullStack Developer</p>
                        <p class="description">She have Biomedical Engineering Background , Self-motivator , Meticulous , Junior JS Developer Former CAD Designer @EONDental and she have good knowledg in those language ~Java Scribt , HTML , CSS~.</p>
                        <div class="social">
                        <a href="https://github.com/EsraaBanat"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/esraabanat/"><i class="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box" style={{width:"400px" , height:"600px"}}><img class="rounded-circle" src={require('./AboutAssets/shams.jpg')}></img>
                        <h3 class="name">Shams Alsaraireh</h3>
                        <p class="title">FullStack Developer</p>
                        <p class="description">Likable and dedicated Full-stack web-developer using JavaScript, html, CSS, and NodeJS. Eager to offer superb coding and computer skills to help the organization I am working for to grow its client base and increase customer satisfaction in the IT industry.</p>
                        <div class="social">
                        <a href="https://github.com/shamssar"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/shams-alsaraireh/"><i class="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col d-flex justify-content-center"> 
            <div class="row people">
           <div class="cl2">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box" style={{width:"400px" , height:"600px"}}><img class="rounded-circle" src={require('./AboutAssets/Ahmad.png')}></img>
                        <h3 class="name">Ahmad Amaireh</h3>
                        <p class="title">FullStack Developer</p>
                        <p class="description">Senior Quality Assurance, and he have good knowledg in those language ~Java Scribt , HTML , CSS~. </p>
                        <div class="social">
                        <a href="https://github.com/AhmadAmaireh"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ahmad-al-amaireh-95466b74/"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                

                <div class="col-md-6 col-lg-4 item">
                    <div class="box" style={{width:"400px" , height:"600px"}}><img class="rounded-circle" src={require('./AboutAssets/suhaib.png')}></img>
                        <h3 class="name">Suhaib Almomani</h3>
                        <p class="title">FullStack Developer</p>
                        <p class="description">I studied Computer Science at The Hashemite University (HU) and am looking forward to developing my programming skills. and he have good knowledg in those language ~Java Scribt , HTML , CSS~.</p>
                        <div class="social">
                        <a href="https://github.com/SohaibAlmomani"><i class="fa fa-github"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                </div>
                </div>
                </div>
        
    

</div> */}

<AboutCards/>



<br/>
<br/>

 

    <MDBTypography tag="h4">Coming Soon!</MDBTypography>
    
    <div className="ticker-container">
   <div className="ticker-tape">
      <div className="slide-track">
         <div className="slide"><img className="alignnone size-full wp-image-13024" src={require('./AboutAssets/visa.png')}alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13023" src={require('./AboutAssets/master.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13022" src={require('./AboutAssets/google.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-medium wp-image-13021" src={require('./AboutAssets/cliq.png')} alt="" width="250" height="60" /></div>
         <div className="slide"><img className="alignnone size-full wp-image-13020" src={require('./AboutAssets/paypal.png')} alt="" width="250" height="60" /></div>
         
      </div>
   </div>
</div>
</Container>
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

