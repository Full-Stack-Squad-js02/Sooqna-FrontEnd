// import Carousel from 'react-bootstrap/Carousel';
// import './Slider.module.css'

// function SlideShow() {
//   return (
//     <div className='h-20'>
//     <Carousel variant="light" fade='false'>
//         <Carousel.Item style={{height:'20rem'}}>
//         <img
//           className="d-block w-100"
//             src="https://source.unsplash.com/random?sales"
//             alt="First slide"
//             // style={{ height: '20rem' }}
//         />
//         {/* <Carousel.Caption> */}
//           {/* <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//         <Carousel.Item style={{height:'20rem'}}>
//         <img
//             className="d-block w-100"
//           src="https://source.unsplash.com/random?sales"
//             alt="Second slide"
//             // style={{ height: '20rem' }}
//         />
//         {/* <Carousel.Caption> */}
//           {/* <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//         <Carousel.Item style={{height:'20rem'}}>
//         <img
//             className="d-block w-100"
//           src="https://source.unsplash.com/random?sales"
//             alt="Third slide"
//             // style={{ height: '20rem' }}
//         />
//         {/* <Carousel.Caption> */}
//           {/* <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default SlideShow;

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function SlideShow() {
  const slideImages = ['https://source.unsplash.com/random?sales', 'https://source.unsplash.com/random?slideshow', 'https://source.unsplash.com/random?sales'];
  
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                {/* <span>Slide {index + 1}</span> */}
              </div>
                  {/* <img src={slideImages[index] } /> */}
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
