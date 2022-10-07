import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { AiFillRobot, AiFillHome } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { isAuthenticated } from '../../auth';
import Logo from '../../Assests/Sooqna.svg'
import './Navbar.css';
import UserDropdownList from '../UserProfile/Dropdown';
import { Context } from '../../context/context';

function NavBar() {

    const states = useContext(Context);
    const { user, ordersToApprove, filter, setFilter, search, setSearch, searchItems } = states
    const products = states.cartProducts;
    const navigate = useNavigate();

    return (
        <Navbar expand="sm" style={{
            height: '88px', backgroundColor: '#003566', position: 'fixed',
            zIndex: '1', width: '100%', top: '0'
        }}>
            <Container fluid>
                <img
                    src={Logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Sooqna logo"
                    style={{
                        width: '5.5rem',
                        height: '10rem',
                        marginRight: '4rem'
                    }} />
                {/* Tabs */}



                <Navbar.Brand href="/"><AiFillHome id='nav-icons' style={{
                    height: '1.8rem',
                    width: '2.5rem',
                    margin: '0 -10px 8px',
                }} /> Home</Navbar.Brand>
                <Navbar.Brand href="/about">
                    <AiFillRobot style={{
                        height: '1.5rem',
                        width: '2rem',
                        margin: '0 0px 7px',
                    }} />
                    About</Navbar.Brand>
                <Navbar.Brand href="#contact" style={{ scrollBehavior: 'smooth' }}>
                    <IoMdContacts style={{
                        height: '2rem',
                        width: '2rem',
                        margin: '0 0px 3px',
                    }} />Contact Us</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            maxHeight: '100px',
                        }}
                        navbarScroll>
                        <NavDropdown
                            title={filter}
                            id="navbarScrollingDropdown"
                            style={{
                                marginLeft: '6rem',
                            }}
                        >
                            <NavDropdown.Item
                                onClick={() => {
                                    setSearch({
                                        ...search,
                                        filteredBy: 'name'
                                    })
                                    setFilter('Product')
                                }}>Product</NavDropdown.Item>

                            <NavDropdown.Item
                                onClick={() => {
                                    setSearch({
                                        ...search,
                                        filteredBy: 'color'
                                    })
                                    setFilter('Color')
                                }}>
                                Color
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => {
                                    setSearch({
                                        ...search,
                                        filteredBy: 'category'
                                    })
                                    setFilter('Category')
                                }}>
                                Category
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                onClick={() => {
                                    setSearch({
                                        ...search,
                                        filteredBy: 'price'
                                    })
                                    setFilter('Price')
                                }}>
                                Price
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav >
                    {/* Search */}
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                                setSearch({
                                    ...search,
                                    input: e.target.value
                                })
                            }} />
                        <BsSearch id='nav-icons'
                            style={{
                                width: '7rem',
                                height: '2rem',
                                marginRight: '7rem',
                                marginTop: '5px'

                            }}
                            onClick={() => {
                                searchItems();
                                navigate('/searchbar')
                            }} />
                        {!isAuthenticated() ?
                            <React.Fragment>
                                <Button
                                    variant="outline-warning"
                                    style={{
                                        margin: '0 1rem 0 4rem',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onClick={() => navigate('/signin')}>Sign In</Button>
                                <Button variant="outline-warning" style={{ whiteSpace: 'nowrap' }}
                                    onClick={() => navigate('/signup')}>Sign Up</Button>
                            </React.Fragment>
                            :
                            user.role !== 'admin' ?
                                <React.Fragment>
                                    {/* <Button variant="outline-success" style={{ whiteSpace: 'nowrap' }} onClick={handleLogOut}>Log Out</Button> */}
                                    {/* <Button variant="outline-success" onClick={() => navigate('/product')}>AddProduct</Button> */}
                                    <BsFillCartFill id='nav-icons' onClick={() => { navigate('/mycart') }} style={{
                                        height: 'auto',
                                        width: '4rem',
                                        margin: '0 5px',
                                    }}

                                    />
                                    {products.length ?
                                        <i style={{
                                            marginLeft: '-4px', color: 'white', fontWeight: 'bolder',
                                            backgroundColor: 'red', width: '9%', height: '10%', borderRadius: '100%'
                                        }}>{products.length}</i>

                                        : null}
                                    <MdOutlineFavorite id='nav-icons' onClick={() => navigate('/Wishlist')} style={{
                                        height: 'auto',
                                        width: '4rem',
                                        margin: '0 5px'
                                    }} />
                                    <FaUserAlt id='nav-icons'  onClick={() => { navigate('/user') }} style={{
                                        height: 'auto',
                                        width: '4rem',
                                        margin: '0 5px'
                                    }} />
                                    <UserDropdownList />
                                </React.Fragment> :
                                <React.Fragment >
                                    <UserDropdownList style={{ margin: '0 0rem 0 15rem' }} />
                                    <IoNotificationsSharp onClick={() => { navigate('/approveorders') }} style={{
                                        height: 'auto',
                                        width: '4rem',
                                        margin: '0 5px',
                                    }} />
                                    {ordersToApprove.length ?
                                        <i style={{
                                            marginLeft: '-4px', color: 'white', fontWeight: 'bolder',
                                            backgroundColor: 'red', width: '9%', height: '10%', borderRadius: '100%'
                                        }}>{ordersToApprove.length}</i> : null}
                                </React.Fragment>}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
