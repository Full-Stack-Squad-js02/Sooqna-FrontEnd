import React from 'react';
// import { MDBInput } from 'mdb-react-ui-kit';


// export default function OrderForm() {
//   return (
//    <>
//       {/* <MDBInput label='Your Address' id='form1' type='text' />
//       <MDBInput label='Another Address' id='form1' type='text' />
//       <MDBInput label='Paymant Method' id='form1' type='text' /> */}

// <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//       <Form.Control
//         type="password"
//         id="inputPassword5"
//         aria-describedby="passwordHelpBlock"
//       />
      
//       <p className="Total Price">Total Price</p>
      
//     </>
//   );
// }

import {Form , Button} from 'react-bootstrap';

function OrderForm() {
  return (
    <div style={{    
      width: '24rem',
      margin: '4rem 34rem'}}>
      <Form.Label htmlFor="inputPassword5">Your Address</Form.Label>
      <Form.Control
        type="text"
        // id="inputPassword5"
        // aria-describedby="passwordHelpBlock"
        />

        <br/>
        <br/>
      <Button variant="success">Add another address</Button>

      <br/>
      <br/>

      <Form.Label htmlFor="inputPassword5">Another Address</Form.Label>
      <Form.Control
        type="text"
        // id="inputPassword5"
        // aria-describedby="passwordHelpBlock"
        />
      
      <Form.Label htmlFor="inputPassword5">Paymant Method</Form.Label>
      <Form.Control
        type="text"
        // id="inputPassword5"
        // aria-describedby="passwordHelpBlock"
        />

        <br/>
        <br/>
    
      <h3 >Total Price</h3>
    </div>
  );
}

export default OrderForm;