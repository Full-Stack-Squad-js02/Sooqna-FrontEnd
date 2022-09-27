import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  return (
    // <div className='container'>
    <Carousel variant="light" fade='false'>
      <Carousel.Item>
        <img
          className="d-block w-100 h-1"
          src="https://image.shutterstock.com/image-vector/url-app-icon-button-600w-1795018324.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-vector/seamless-pattern-short-chain-links-600w-1973226338.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
          // </div>
  );
}

export default SlideShow;

// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import styles from "./Slider.module.css";

// export default function SlideShow() {
//     const slideImages = [  "https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg",
//   "https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg",
//   "https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg"]
//   return (
//     <div className={styles.container}>
//       <Slide easing="ease">
//         {slideImages.map((slide, index) => {
//           return (
//             <div className={styles.slide} key={slide}>
//               <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
//                 <span>Slide {index + 1}</span>
//               </div>
//                   {/* <img src={slideImages[index] } /> */}
//             </div>
//           );
//         })}
//       </Slide>
//     </div>
//   );
// }