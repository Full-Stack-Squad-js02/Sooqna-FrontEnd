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
  const slideImages = ['https://pixabay.com/get/g8410e7464e827bb4ae9295734832f8453832b3f4c7f66db4275dd3209f12bd38f96ac0e36b343282dd987b06ec1722dcc2fa6ebfbd431cf068e7a52f3e903f7fb4d38510feb52ca105683730ec0eba35_1920.jpg',
   'https://source.unsplash.com/random?slideshow',
    'https://pixabay.com/get/g5bb3caaca3de214645cfbdd9e8412b1f27c856dd8c4b7a60a9e74fea62b877f120be5c36961ac7efe757b7c172c722238635bc9cbd7c58df61224fb16eb562cadca332474e79bf54f6e1a049de9dae65_1920.jpg',
    'https://matjarii.com/pub/media/codazon/slideshow/cache/880x380/b/a/banner-06.jpg',
    'https://matjarii.com/pub/media/codazon/slideshow/cache/880x380/b/a/banner-11.jpg',
    'https://pixabay.com/get/gc89b4393181aded234a04bce2ed51aa5c0490f592d9405d72734806867fb90511c7eacd5184b16b56f1a8aa17c6e55b38264db0df53b1e9f9e44a99ae09eac7bad047c7625f24e23d47b63e814ccd6ed_1920.jpg',
    'https://pixabay.com/get/g032f6417065b4736fa87b14d372ac75e77f77c5f043a5bc5dece3cdfb07067ce9e2b8cc76ee09d1f2c499bca2bbbfb12731a6c250f398bf6b79fba333ad74f124afedfb21f184835b11332abfecd7431_1920.jpg'
  ];
  
  return (
    <div className={styles.container} style={{marginTop:'5rem'}}>
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
