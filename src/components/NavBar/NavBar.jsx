import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown , 
    Popover
} from 'react-bootstrap';
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
// import { CgShoppingCart} from "react-icons/cg";
import { isAuthenticated} from '../../auth';
import {searchBy} from '../../api/api'
import Logo from '../../Assests/Sooqna.svg'
import './Navbar.css';
import UserDropdownList from '../UserProfile/Dropdown';

function NavBar({ setSearchData }) {

    const { user } = isAuthenticated();
    const [search,
        seSearch] = useState({input: '', filteredBy: 'name'});
    const [filter,
        setFilter] = useState('Filtered By')

    const navigate = useNavigate();


    const searchItems =async  () => {
        let items = await searchBy(search);
        console.log('pppppp',items)
        setSearchData(items)
    }

    return (
        <Navbar expand="sm" style={{ height: '81px', backgroundColor:'#003566'}}>
            <Container fluid>
                <img
                    src={Logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Sooqna logo"
                    style={{
                    width: '5rem',
                    height: 'auto',
                    marginRight: '4rem'
                    }} />
                {/* Tabs */}
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Brand href="/about">About</Navbar.Brand>
                <Navbar.Brand href="#contact" style={{ scrollBehavior: 'smooth' }}>Contact Us</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
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
                                seSearch({
                                    ...search,
                                    filteredBy: 'name'
                                })
                                    setFilter('Product')
                            }}>Product</NavDropdown.Item>

                            <NavDropdown.Item
                                onClick={() => {
                                seSearch({
                                    ...search,
                                    filteredBy: 'color'
                                })
                                    setFilter('Color')
                            }}>
                                Color
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => {
                                seSearch({
                                    ...search,
                                    filteredBy: 'category'
                                })
                                    setFilter('Category')
                            }}>
                                Category
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                onClick={() => {
                                seSearch({
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
                            seSearch({
                                ...search,
                                input: e.target.value
                            })
                        }}/>
                        <BsSearch
                        style={{
                            width: '7rem',
                            height: '2rem',
                            marginRight: '7rem',
                        }}
                            onClick={() => {
                                searchItems();
                            }}  />
                        {!isAuthenticated()?
                        <React.Fragment>
                        <Button
                            variant="outline-warning"
                            style={{
                            margin: '0 1rem 0 4rem',    
                            whiteSpace: 'nowrap'
                        }}
                            onClick={() => navigate('/signin')}>Sign In</Button>
                                <Button variant="outline-warning" style={{whiteSpace: 'nowrap'}}
                                    onClick={() => navigate('/signup')}>Sign Up</Button>
                         </React.Fragment>
                            :
                            user.role !== 'admin' ?
                                <React.Fragment>
                            {/* <Button variant="outline-success" style={{ whiteSpace: 'nowrap' }} onClick={handleLogOut}>Log Out</Button> */}
                            {/* <Button variant="outline-success" onClick={() => navigate('/product')}>AddProduct</Button> */}
                            <BsFillCartFill onClick={() => { navigate('/myCart')}} style={{
                                height: 'auto',
                                    width: '4rem',
                                    margin: '0 5px',
                                }} 
                                />

                                
                                <MdOutlineFavorite onClick={() => navigate('/Wishlist')} style={{
                                    height: 'auto',
                                    width: '4rem',
                                    margin: '0 5px'}} />
                                <FaUserAlt onClick={() => { navigate('/user') }} style={{
                                    height: 'auto',
                                    width: '4rem',
                                    margin: '0 5px'
                                }} />
                                <UserDropdownList />
                                </React.Fragment> :
                                <React.Fragment >
                                    <UserDropdownList style={{ margin: '0 0rem 0 15rem'}} />
                                    <IoNotificationsSharp onClick={() => { navigate('/approveorders') }} style={{
                                        height: 'auto',
                                        width: '4rem',
                                        margin: '0 5px',
                                    }} /> 
                                </React.Fragment>}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;