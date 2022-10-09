import React, {useContext} from "react";
import HomeCard from "./HomeCard";
import SlideShow from "./SlideShow";
import {Container, Row} from "react-bootstrap";
import "./Home.css";
import {Context} from '../../context/context';

function Home() {

    const states = useContext(Context);
    const { products } = states;
    // const { itemDetails } = states;

    // console.log('LOLOLOL', itemDetails)

    return (
        <>
            <SlideShow />
            <br/>
            <h1
                style={{
                fontFamily: 'inherit',
                color: 'darkblue',
                fontSize: '100 px',
                marginTop: '55 px',
            }}>Featured Products</h1>
            <Container
                fluid='sm'
                style={{
                margin: '13px 3rem 13px 5rem'
            }}
            >
                {/* <Row>
            {searchData.length ? searchData.map((product, idx) => {
                        return (
                            <HomeCard product={product} key={idx} />
                        )
                    })
              :null
              // < h2 > No Matching Items</h2>
              }
                </Row> */}
                <Row xs="4">

                    {products
                        ? products.map((product, idx) => {
                            return (<HomeCard product={product} key={idx}/>)
                        })
                        : null}
                </Row>

            </Container>

        </>
    );
}

export default Home;
