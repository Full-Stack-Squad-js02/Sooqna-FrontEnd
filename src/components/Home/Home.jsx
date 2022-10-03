import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import SlideShow from "./SlideShow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { getAllProducts } from "../../api/api";

function Home() {
  const [products, setProducts] = useState("");
  const [error, setError] = useState("");

  const loadItems = async () => {
    await getAllProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    console.log("iiiiiiii", products);
    loadItems();
  }, []);

  return (
    <>
      <SlideShow />
      <h1 style={{ fontFamily: "cursive", marginTop: "3rem", marginBottom: "2rem" }}>Most selling</h1>
      <Container fluid="sm" style={{ margin: "13px 3rem 13px 5rem" }}>
        <Row xs="4">
          {products
            ? products.map((product, idx) => {
                return <HomeCard product={product} />;
              })
            : null}
        </Row>
      </Container>
    </>
  );
}

export default Home;
