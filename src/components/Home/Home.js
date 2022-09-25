import React from 'react';
import HomeCard from './HomeCard';
import SlideShow from './SlideShow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <div>
            <SlideShow/>
            <Container>
                <Row>
                    <Col>
                        <HomeCard />
                        <HomeCard />
                    </Col>
                    <hr />
                    <Col>
                        <HomeCard />
                        <HomeCard />
                    </Col>
                    <Col>
                        <HomeCard />
                        <HomeCard />
                    </Col>
                </Row>
            </Container>
            {/* <div>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
        </div> */}
        </div>
    )
}
