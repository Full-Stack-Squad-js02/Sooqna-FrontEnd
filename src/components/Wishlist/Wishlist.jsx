import React, {useState ,useEffect} from 'react';
import {
    // MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    // MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { removeOneFromWishList, moveFromWishlistToCart, getProductsById, getAllWishlist } from "../../api/api";
import { isAuthenticated } from '../../auth';
// import {useDispatch} from 'react-redux';

export default function Wishlist(product) {

    const { token } = isAuthenticated();

    const [items, setItems] = useState([]);

    const [products, setProducts] = useState([]);

    const wislistItems = async () => {
        let itemsInWishlist = await getAllWishlist(token);
        console.log('11111', itemsInWishlist)
        setItems(itemsInWishlist);
        // console.log('IIIIIIIITTTEEEEEEE', itemsInWishlist.length)
         if(itemsInWishlist.length !== 0){
            let Ids = itemsInWishlist.map((e) => {
                    return e.product_id;
            });
                let productsInWishlist = await getProductsById(Ids);
                setProducts(productsInWishlist);
                // console.log('3333333', productsInWishlist)
        }
    };
    
    // console.log('444444444', products)
    useEffect(() => {
        wislistItems();
    }, []);


    const {id,title,price,color,image}=product;
    console.log(product);
    // const dispatch = useDispatch;
    const deleteItemHandle = ()=> {
        // dispatch(removeFromFavorite(id,token))
    }
    return (
        <section className="h-100" style={{ backgroundColor: "#eee", margin: '-13px 13rem' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10" style={{ marginRight:'9rem'}}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                WishList
                            </MDBTypography>
                            {/* <div>
                                <p className="mb-0">
                                    <span className="text-muted">Sort by:</span>
                                    <a href="#!" className="text-body">
                                        price <i className="fas fa-angle-down mt-1"></i>
                                    </a>
                                </p>
                            </div> */}
                        </div>
                        {products ? 
                            products.map((item,idx) => {
                                return (
                            <MDBCard className="rounded-3 mb-4">
                                <MDBCardBody className="p-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <MDBCardImage className="rounded-3" fluid
                                                        src={`${item.image}`}
                                                // alt="Cotton T-shirt" 
                                                />
                                        </MDBCol>
                                        <MDBCol md="3" lg="3" xl="3">
                                            <p className="lead fw-normal mb-2">{title}</p>
                                            <p>
                                                {/* <span className="text-muted">Size: </span>M{" "} */}
                                                        <span className="text-muted">Color: </span>{item.color}
                                            </p>
                                        </MDBCol>
                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                            <MDBTypography tag="h5" className="mb-0">
                                                        {`${item.price}$`}
                                            </MDBTypography>
                                        </MDBCol>

                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger" >
                                            <MDBIcon onClick={() => { moveFromWishlistToCart(item.id,token) }} fas icon="cart-plus text-danger" size="lg" />
                                            </a>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger" >
                                                <MDBIcon onClick={() => { removeOneFromWishList(items[idx].id,token) }} fas icon="trash text-danger" size="lg" />
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                                )
                            })
                        : null}


            
                        {/* <MDBCard className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                        <MDBCardImage className="rounded-3" fluid
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                            alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                        <p>
                                            <span className="text-muted">Size: </span>M{" "}
                                            <span className="text-muted">Color: </span>Grey
                                        </p>
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="2"
                                        className="d-flex align-items-center justify-content-around">
                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="minus" />
                                        </MDBBtn>

                                        <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="plus" />
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                        <MDBTypography tag="h5" className="mb-0">
                                            $499.00
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                                        <a href="#!" className="text-danger">
                                            <MDBIcon fas icon="trash text-danger" size="lg" />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                        <MDBCardImage className="rounded-3" fluid
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                            alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                        <p>
                                            <span className="text-muted">Size: </span>M{" "}
                                            <span className="text-muted">Color: </span>Grey
                                        </p>
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="2"
                                        className="d-flex align-items-center justify-content-around">
                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="minus" />
                                        </MDBBtn>

                                        <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="plus" />
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                        <MDBTypography tag="h5" className="mb-0">
                                            $499.00
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                                        <a href="#!" className="text-danger">
                                            <MDBIcon fas icon="trash text-danger" size="lg" />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard> */}

                        {/* <MDBCard className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                        <MDBCardImage className="rounded-3" fluid
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                            alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                        <p>
                                            <span className="text-muted">Size: </span>M{" "}
                                            <span className="text-muted">Color: </span>Grey
                                        </p>
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="2"
                                        className="d-flex align-items-center justify-content-around">
                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="minus" />
                                        </MDBBtn>

                                        <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                                        <MDBBtn color="link" className="px-2">
                                            <MDBIcon fas icon="plus" />
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                        <MDBTypography tag="h5" className="mb-0">
                                            $499.00
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                                        <a href="#!" className="text-danger">
                                            <MDBIcon fas icon="trash text-danger" size="lg" />
                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard> */}

                        {/* <MDBCard className="mb-4">
                            <MDBCardBody className="p-4 d-flex flex-row">
                                <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
                                <MDBBtn className="ms-3" color="warning" outline size="lg">
                                    Apply
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard>
                            <MDBCardBody>
                                <MDBBtn className="ms-3" color="warning" block size="lg">
                                    Apply
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}