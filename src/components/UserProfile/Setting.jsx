import React from 'react';
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
    MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Setting() {
    return (
        <section style={{
            backgroundColor: '#eee'
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
                                <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">example@example.com</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Password</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">********</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </section>
    );
}