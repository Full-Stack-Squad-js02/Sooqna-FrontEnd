import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, authenticate } from "../../auth/index";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import LoginLogo from "../../Assests/LOG_IN-LOGO3.png";
// import Swal from 'sweetalert2';

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const navigate = useNavigate();

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })



  const handleChange = (name) => (event) => {
    setData({
      ...data,
      error: false,
      // success:false,
      [name]: event.target.value,
    });
  };
  // console.log(username, email, password, phoneNumber, adress);

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(data).then((data) => {
      if (data.error) {
        console.log("ERROR");
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
        // Toast.fire({
        //   icon: 'success',
        //   title: 'Signed in successfully'
        // })
        navigate("/");
        authenticate(data);
        // console.log(data);
        event.target.reset();
      }
    });
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard
        style={{
          width: "30rem",
          marginLeft: "19rem",
        }}
      >
        <MDBCardBody className="d-flex flex-column">
          <div className="d-flex flex-row mt-2" style={{ justifyContent: "center" }}>
            <img
              src={LoginLogo}
              alt="Sooqna logo"
              style={{
                width: "10rem",
                height: "auto",
                marginBottom: "-4rem",
                marginTop: "-1rem",
              }}
            />
          </div>
          <br />
          <br />
          <MDBInput wrapperClass="mb-4" placeholder="User Name" type="text" size="lg" value={username} onChange={handleChange("username")} />
          <MDBInput wrapperClass="mb-4" placeholder="Password" type="password" size="lg" value={password} onChange={handleChange("password")} />
          <MDBBtn className="mb-4 px-5" style={{ backgroundColor: "#003566" }} size="lg" variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </MDBBtn>
          {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a> */}
          <p className="mb-5 pb-0" style={{ color: "#393f81" }}>
            Don't have an account?{" "}
            <a href="#!" style={{ color: "#393f81" }} onClick={() => navigate("/signup")}>
              Register here
            </a>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
