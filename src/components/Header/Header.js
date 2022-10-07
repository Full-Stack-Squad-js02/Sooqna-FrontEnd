// import React from "react";
// import Container from "react-bootstrap/Container";
// import { isAuthenticated } from "../../auth";
// import Rating from '@mui/material/Rating';
// import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
// import {BsCartPlus} from "react-icons/bs";


// import './hed.css'


// function AboutCards(item) {
//     // const { token } = isAuthenticated();
    
//     return (
//         <>
//             <ul>
//                 <li class="booking-card" style={{backgroundImage: 'url(https://pixabay.com/get/g1b14458d5dae9e305def341a3a325b0ed47962af646f7fdf3268dd09fecadff95b5176068eb0196b904b3facdd43e16e15c3665ba61d6fcd521d6712db85ef24ac10169f88825493d95e9c7668f5cfc2_1920.jpg)', marginTop: '8rem'}}>
//                     <div class="book-container">
//                         <div class="content">
//                             <button class="btn">View Details</button>
//                         </div>
//                     </div>
//                     <div class="informations-container">
//                         <h2 class="title">Audi a3 2009</h2>
//                         <p class="sub-title"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/></p>
//                         <p class="price"><svg class="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
//                         </svg>12000 $</p>
//                         <div class="more-information">
//                             <div class="info-and-date-container">
//                                 < MdOutlineFavorite className="icons" />
//                                 <BsCartPlus className="icons" />
//                             </div>
//                             <p class="disclaimer">Refreshed interior and exterior design All-wheel drive became available with base engine Leather seats, satellite radio and auxiliary input became standard</p>
//                         </div>
//                     </div>
//                 </li>
//             </ul>
//         </>
//     );
// }

// export default AboutCards;