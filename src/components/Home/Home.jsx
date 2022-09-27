import React from 'react';
import HomeCard from './HomeCard';
import SlideShow from './SlideShow';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function Home() {
//     return (
//         <div>
//             <SlideShow/>
//             <Container>
//                 <Col>
//                     <Row>
//                         <HomeCard />
//                         <HomeCard />
//                     </Row>
//                     <Row>
//                         <HomeCard />
//                         <HomeCard />
//                     </Row>
//                     <Row>
//                         <HomeCard />
//                         <HomeCard />
//                     </Row>
//                 </Col>
//             </Container>
//             {/* <div>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//             <HomeCard/>
//         </div> */}
//         </div>
//     )
// }

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderingExample() {
    return (
        <>
        <SlideShow/>
        <Container>
                <Row md={4}>
                    <Col><HomeCard /></Col>
                    <Col xs={6}><HomeCard /></Col>
                    <Col><HomeCard /></Col>
                </Row>
        </Container>
        </>
    );
}

export default OrderingExample;
