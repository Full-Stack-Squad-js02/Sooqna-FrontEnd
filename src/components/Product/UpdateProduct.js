import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';


export default function UpdateProduct() {
    const navigate = useNavigate();
    return (
      
      <div style={{display:'flex'}}>

<div>

        <img style={{margin: '10rem 4.5rem', height: '26rem'}}

                  className="d-block w-100 h-1"
                  src="https://userguiding.com/wp-content/uploads/2021/04/what-is-product-update-1160x387.jpg"
                  alt="First slide"
                  />
                  </div>
                    
      <Form style={{width: "30rem" , margin: "7rem"}}>
  
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Product </Form.Label>
          <Form.Control type="text"
           />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="description" style={{height:'5rem'}}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"
         />
        </Form.Group>
  
       
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" 
         />
        </Form.Group>
  
  
         <br/>
  
        <Form.Select aria-label="Default select example" style={{width: '30rem', height: '2.5rem'}}>
         <option style={{ color: "#4051a5" }}>Select category</option>
         {/* {categories && categories.map((c, i) => (
                               <option key={i} value={c}>
                                   {c}
                               </option>
                           ))} */}
       </Form.Select>
  
       <br/>
       <br/>
  
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" 
         />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number"
          />
        </Form.Group>
  
        <Form.Group>
  
             <Form.Label style={{ color: "#4051a5" }}>Image</Form.Label>
          
             <FileBase64
                           required
                           type="file"
                           multiple={false}
                //   onDone={({ base64 }) => {
                //    console.log(base64)
                //     setItem({
                //            ...item,
                //            image: base64
                //        })}}
                       />
           </Form.Group>
           <br/>
           <br/>
        <Button variant="success" type="submit" >Update Product</Button> {' '}
          <Button variant="danger" type="submit" onClick={() => { navigate('/user') }}> Cancel</Button>
      </Form>
     
      </div>
  
    );
  }
  

//   <div style={{display:'flex'}}>{UpdateProduct()}</div> 