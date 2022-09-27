import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUp } from "../../auth/index";
// import './sinup.css';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBIcon } from "mdb-react-ui-kit";

function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    adress: "",
  });

  const { username, email, password, phonenumber, adress, error } = data;

  const handleChange = (name) => (event) => {
    setData({
      ...data,
      error: false,
      // success:false,
      [name]: event.target.value,
    });
  };
  // console.log(username, email, password, phonenumber, adress);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('00000000000000000');
    signUp(data).then((data) => {
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
        console.log(data);
        event.target.reset();
      }
    });
  };

  return (
    // <Form onSubmit={handleSubmit}>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>User Name</Form.Label>
    //     <Form.Control type="text" placeholder="Enter your name" value={username} onChange={handleChange('username')} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={handleChange('email')} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange('password')} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Phone Number</Form.Label>
    //     <Form.Control type="number" placeholder="07*****" value={phonenumber} onChange={handleChange('phonenumber')}  />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Address</Form.Label>
    //     <Form.Control type="text" placeholder="Enter youre address" value={adress} onChange={handleChange('adress')} />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Sign Up
    //   </Button>
    // </Form>
    // <MDBContainer fluid className='my-5'>

    <MDBContainer fluid>
      <div className="p-5 bg-image" style={{ backgroundImage: "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)", height: "300px" }}></div>

      <MDBCard className="ml-22 mb-5 p-5 shadow-5 w-50" style={{ marginTop: "-100px", marginLeft: "22rem", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
        <MDBCardBody className="p-5 text-center" >
          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBInput wrapperClass="mb-4" placeholder="Full Name" id="form1" type="text" value={username} onChange={handleChange("username")} />
          <MDBInput wrapperClass="mb-4" placeholder="example@gmail.com" id="form1" type="email" value={email} onChange={handleChange("email")} />
          <MDBInput wrapperClass="mb-4" placeholder="Password" id="form1" type="password" value={password} onChange={handleChange("password")} />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="07********" value={phonenumber} onChange={handleChange("phonenumber")} id="form1" />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="Enter Your Address" value={adress} onChange={handleChange('adress')} id="form1" />

          {/* <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Subscribe to our newsletter" />
          </div> */}

          <MDBBtn className="w-100 mb-4" size="md" variant="primary" type="submit" onClick={handleSubmit} >
            sign up
          </MDBBtn>

          {/* <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm" />
            </MDBBtn>

          </div> */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
