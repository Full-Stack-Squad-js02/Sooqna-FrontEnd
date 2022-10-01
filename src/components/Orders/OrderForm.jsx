import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function OrderForm() {

    const navigate = useNavigate();

    const [showAdress,setShowAdress]=useState(false)

    function handleConfirmOrder(event) {
        // event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your Order is Confirmed',
        })
    }
    console.log(showAdress);
    return (
        <div
            style={{
            width: '24rem',
            margin: '4rem 34rem'
        }}>
            <Form.Label htmlFor="address">Your Address</Form.Label>
            <Form.Control type="text" // id="inputPassword5"
                // aria-describedby="passwordHelpBlock"
            />

            <br/>
            <br/>
            <Button variant="outline-dark" onClick={() => { setShowAdress(!showAdress) }}>Add another address</Button>
            <br/>
            <br />
            {showAdress ?
                <> 
            <Form.Label htmlFor="another address">Another Address</Form.Label>
            <Form.Control type="text"
            // id="inputPassword5"
            // aria-describedby="passwordHelpBlock"
            />
            </> 
             : null} 

            <Form.Label htmlFor="payment method">Paymant Method</Form.Label>
            <Form.Control type="text" // id="inputPassword5"
                // aria-describedby="passwordHelpBlock"
            />
            <br/>
            <Button variant="dark" onClick={handleConfirmOrder}>Confirm Order</Button>{' '}<Button variant="dark" onClick={() => { navigate('/mycart') }} >Cancel</Button>
            <br/>

            <br/>
            <br/>

            <h3 >Total Price</h3>
        </div>
    );
}

export default OrderForm;