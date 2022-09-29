import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUp } from "../../auth/index";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBIcon } from "mdb-react-ui-kit";
import LoginLogo from '../../Assests/logo.png';
import { useNavigate } from 'react-router-dom';


function Signup() {

  const navigate = useNavigate();
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
    console.log("00000000000000000");
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
        navigate('/signin');
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
      <div className="p-5 bg-image" style={{ backgroundColor: "#FEBD69", height: "300px" }}></div>

      <MDBCard className="ml-22 mb-5 p-5 shadow-5" style={{ width: "40rem", margin:'-16rem 0 0 27.5rem ' ,background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
        <MDBCardBody className="p-5 text-center">
          {/* <h2 className="fw-bold mb-5">Sign up now</h2> */}
          <img style={{width:'8rem'  , height:'8rem' }} src={LoginLogo}/>

          <MDBInput wrapperClass="mb-4" type="text" placeholder="Full Name" id="form1" value={username} onChange={handleChange("username")} />
          <MDBInput wrapperClass="mb-4" type="email" placeholder="example@gmail.com" id="form1" value={email} onChange={handleChange("email")} />
          <MDBInput wrapperClass="mb-4" type="password" placeholder="Password" id="form1" value={password} onChange={handleChange("password")} />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="07********" value={phonenumber} onChange={handleChange("phonenumber")} id="form1" />
          <MDBInput wrapperClass="mb-4" type="text" placeholder="Enter Your Address" value={adress} onChange={handleChange("adress")} id="form1" />

          {/* <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Subscribe to our newsletter" />
          </div> */}

          <MDBBtn style={{ backgroundColor: "#003566" }} className="w-100 mb-4" size="md" type="submit" onClick={handleSubmit}>
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
