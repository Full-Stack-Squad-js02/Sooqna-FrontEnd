import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../Home/HomeCard";

import { getAllProducts } from "../../api/api";



function Search({ searchData }) {
    
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
  
    useEffect(() => {
      console.log("iiiiiiii", searchData);
      // loadItems();
    }, []);
  
  
      return (
          <>
          
              <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem' }} >
                  <Row>
              {searchData.length ? searchData.map((product, idx) => {
                          return (
                              <HomeCard product={product} key={idx} />
                          )
                      })
                :
                < h2 > No Matching Items</h2>
                }
                  {/* </Row>
                  <hr/>
                  <Row xs="4">
                      
                  {products ? products.map((product,idx) => {
                      return (
                        <HomeCard product={product} key={idx} />
                          )
                      }):null} */}
               </Row>
  
              </Container>
          </>
      );
  }
  
  export default Search;
  