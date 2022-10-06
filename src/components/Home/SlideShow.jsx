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
  const slideImages = [
    'https://matjarii.com/pub/media/codazon/slideshow/cache/880x380/b/a/banner-06.jpg',
    // 'https://matjarii.com/pub/media/codazon/slideshow/cache/880x380/b/a/banner-11.jpg',
    // 'https://riverfresh.com.au/application/files/7714/6965/6036/HeaderSlideshow1-Welcome2x.jpg',
    // 'https://riverfresh.com.au/application/files/5614/6965/6033/HeaderSlideshow2-ShopOnline12x.jpg',
    // 'https://riverfresh.com.au/application/files/9914/6965/6035/HeaderSlideshow3-FreshLocal2x.jpg',
    // 'https://www.livid-sports.at/images/slideshow/shop/slider-shop-2.jpg',
    // 'https://gs1ca.org/gs1ca-components/images/graphics/intro-image-eComm.png',
    'https://gs1ca.org/gs1ca-components/images/graphics/intro-image-eComm.png',
    'https://thumbs.dreamstime.com/b/online-shopping-young-person-buying-product-application-smartphone-ecommerce-market-transportation-logistic-business-182456255.jpg',
    'http://images.ctfassets.net/sxag7u4cz1re/15G5nc0t9fMg1tjZQMuhJD/a6b4f1e25a3acf4b496f2f8fe8b9336b/young-woman-working-on-laptop-from-home.jpg',
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
