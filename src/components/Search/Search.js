import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../Home/HomeCard";
import { Context } from '../../context/context';

function Search() {

    const states = useContext(Context);
    const {searchData } = states
    console.log("outside",searchData)

      return (
          <>
          
              <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem' }} >
                  <Row>
              {searchData.length ? searchData.map((product, idx) => {
                console.log("ddd",searchData)
                          return (
                              <HomeCard product={product} key={idx} />
                          )
                      })
                : 
                <h2 style={{margin: '170px'}}> No Matching Items</h2>
               


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
  