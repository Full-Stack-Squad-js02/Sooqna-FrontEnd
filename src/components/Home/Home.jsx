import React, { useEffect, useState, useContext } from "react";
import HomeCard from "./HomeCard";
import SlideShow from "./SlideShow";
import {Container,Row} from "react-bootstrap";
import "./Home.css";
import { getAllProducts } from "../../api/api";
import { TestContext } from '../../context/context'

function Home() {

  const products = useContext(TestContext);

  // const [products, setProducts] = useState("");
  // const [error, setError] = useState("");

  // const loadItems = async () => {
  //   await getAllProducts().then((data) => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setProducts(data);
  //     }
  //   });
  // };

    // console.log("iiiiiiii", products);
  // useEffect(() => {
  //   loadItems();
  // }, []);


    return (
        <>
        <SlideShow />
        <div>
        <h1>Last Posted</h1>
        </div>
            <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem' }} >
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
                <hr/>
                <Row xs="4">
                    
                {products ? products.map((product,idx) => {
                    return (
                      <HomeCard product={product} key={idx} />
                        )
                    }):null}
             </Row>

            </Container>
        </>
    );
}

export default Home;
