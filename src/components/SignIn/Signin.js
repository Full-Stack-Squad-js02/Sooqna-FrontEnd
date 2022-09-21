import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {signIn,authenticate,isAuthenticated} from '../../auth/index' 

function Signup() {

  const [data, setData] = useState({
  username: '',
  password: '',
  });

  const { username,password} = data;
  
  const handleChange = name => event => {
    setData({
            ...data,
            error: false,
            // success:false,
            [name]: event.target.value
          });
        }
        // console.log(username, email, password, phoneNumber, adress);

  
    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(data).then(data => {
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
                authenticate(data);
                // console.log(data);
                event
                    .target
                    .reset();
            }
        })
    }

    // console.log('11111',isAuthenticated());

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={username} onChange={handleChange('username')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange('password')}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
}

export default Signup;