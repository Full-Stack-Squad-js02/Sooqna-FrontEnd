import React, { useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
} from 'mdb-react-ui-kit';
import { userInfo, updateUserInfo } from '../../auth';

export default function Setting() {
    const user = userInfo();
    const [updateInfo, setUpdateInfo] = useState({
        username: "",
        email: "",
        password: "",
        phonenumber: "",
        adress: "",
    })
    const { username, email, password, phonenumber, adress } = updateInfo;

    const handleChange = (name) => (event) => {
        setUpdateInfo({
            ...updateInfo,
            error: false,
            // success:false,
            [name]: event.target.value,
        });
    };
//   console.log(username, email, password, phonenumber, adress);
    
    
    const handleClick = (event) => {
        event.preventDefault();
        // console.log("00000000000000000");
        updateUserInfo(updateInfo);
        // event.target.reset();
    };

    return (
        <section style={{
            backgroundColor: '#eee',
            margin:'-1rem 0'
        }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href='#'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href="#">User</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>Setting</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>
                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput placeholder={user.username}  onChange={ handleChange("username")}></MDBInput >
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput placeholder={user.email} onChange={handleChange("email") }></MDBInput >
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Password</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput type='password' placeholder='********' onChange={handleChange("password") }></MDBInput >
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput placeholder={user.phonenumber} onChange={handleChange("phonenumber") }></MDBInput >
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput placeholder={user.adress} onChange={handleChange("adress") }></MDBInput >
                            </MDBCol>
                        </MDBRow>
                        {/* <MDBRow>
                            <MDBCol sm="11"> */}
                        <MDBBtn className='mx-5 mt-5' color='dark' onClick={handleClick}>
                            Save 
                        </MDBBtn>
                            {/* </MDBCol>
                        </MDBRow> */}
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </section>
    );
}