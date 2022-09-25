import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {signUp} from '../../auth/index' 

function Signup() {

  const [data, setData] = useState({
  username: '',
  email: '',
  password: '',
  phonenumber: '',
  adress: '',
  });


  const { username, email, password, phonenumber, adress, error } = data;
  
  const handleChange = name => event => {
    setData({
            ...data,
            error: false,
            // success:false,
            [name]: event.target.value
          });
        }
        // console.log(username, email, password, phonenumber, adress);

  
    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(data).then(data => {
            if (data.error) {
                setData({
                    ...data,
                    error: data.error,
                    // success: false
                });
            } else {
                setData({
                    ...data,
                    // success: true
                });
              console.log(data)
                event
                    .target
                    .reset();
            }
        })
    }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={username} onChange={handleChange('username')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={handleChange('email')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange('password')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="07*****" value={phonenumber} onChange={handleChange('phonenumber')}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter youre address" value={adress} onChange={handleChange('adress')} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default Signup;