import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, {useState ,useEffect} from 'react';
import Counter from "./Counter";
import Swal from 'sweetalert2';
import './Cart.css';
import {isAuthenticated} from '../../auth';
import { getAllCart } from "../../api/api";

export default function Cart() {
    const {token} = isAuthenticated();
    const [items,
        setItems] = useState([]);
    const [error,
        setError] = useState('');
    
    const loadItems = async () => {
        //get all products
        await getAllCart(token).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                console.log(data);
                setItems(data);
            }
        });
    };

    console.log('iiiiiiii',items);
    
    useEffect(() => {
        loadItems()
        //filter all products on cart id
    }, [ loadItems]);

    function handleConfirmOrder(){
        Swal.fire({
            title: 'Do you want to confirm your Order?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Perfect', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Order calnceled', '', 'info')
            }
        })
    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee", margin: '-1.5rem 0 1.5rem 0 '}}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100"
                    style={{ margin: '0px -16rem 0rem 0' }}
                >
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </MDBTypography>
                                                {/* <MDBTypography className="mb-0 text-muted">
                                                    3 items
                                                </MDBTypography> */}
                                                <i class="fas fa-trash"></i>
                                            </div>

                                            <hr className="my-4" />

                                            {items?
                                            items.map((item,idx)=>{
                                                return(
                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src={item.image}
                                                        fluid className="rounded-3" alt="loading" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                    {item.title}
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                    {item.description}
                                                    </MDBTypography>
                                                </MDBCol>
                                                 <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                {/* <Counter/> */}
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn> 
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                    <MDBTypography tag="h6" className="mb-0">
                                                    {item.price}
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>
                                                )
                                            })
                                            :null}

                                            {/* <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                    <MDBTypography tag="h6" className="mb-0">
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                        Shirt
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                        Cotton T-shirt
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                    <MDBTypography tag="h6" className="mb-0">
                                                        € 44.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow> */}

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBCardText tag="a" href="#!" className="text-body">
                                                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                                                        to shop
                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    items :
                                                </MDBTypography>
                                                <MDBTypography tag="h5">10</MDBTypography>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Payment Method
                                            </MDBTypography>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    {/* <option value="1">Standard-Delivery- €5.00</option> */}
                                                    <option value="2">Chash On Delivery</option>
                                                    <option value="3">VISA Card</option>
                                                    {/* <option value="4">Four</option> */}
                                                </select>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                another address
                                            </MDBTypography>

                                            <div className="mb-5">
                                                <MDBInput size="lg" label="Enter Another Address" />
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Total price
                                                </MDBTypography>
                                                <MDBTypography tag="h5">€ 137.00</MDBTypography>
                                            </div>

                                            <MDBBtn color="dark" block size="lg" onClick={handleConfirmOrder}>
                                                Confirm Order
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}