import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import {BsSearch} from "react-icons/bs";
import {logOut, isAuthenticated} from '../../auth';
import {searchBy} from '../../api/api'
import Logo from '../../Assests/Sooqna.svg'
import './Navbar.css';

function NavBar() {
    const [search,
        seSearch] = useState({input: '', filteredBy: ''});
    const [filter,
        setFilter] = useState('Filtered By')

    const navigate = useNavigate();

    function handleLogOut() {
        logOut();
        navigate('/')
    }
    // console.log('jjj', search)
    // console.log('uuuu', isAuthenticated())

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
                    marginRight: '16rem'
                    }} />
                {/* Tabs */}
                <Navbar.Brand href="/" style={{ color:'white' }}>Home</Navbar.Brand>
                <Navbar.Brand href="/about" style={{ color: 'white' }}>About</Navbar.Brand>
                <Navbar.Brand href="/" style={{ color: 'white' }}>Contact Us</Navbar.Brand>
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
                            color: 'white'
                        }}
                            onClick={() => {
                            searchBy(search)
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
                            <React.Fragment>
                                <Button variant="outline-success" style={{ whiteSpace: 'nowrap' }} onClick={handleLogOut}>Log Out</Button>
                            <Button variant="outline-success" onClick={() => navigate('/product')}>AddProduct</Button>
                         </React.Fragment>}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;