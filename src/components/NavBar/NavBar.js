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
import {logOut} from '../../auth';
import { searchBy } from '../../api/api'
import Logo from '../../Assests/Sooqna.svg'

function NavBar() {
    const [search,
        seSearch] = useState({ input: '', filteredBy: '' });
    const [filter,setFilter]=useState('Filtered By')

    const navigate = useNavigate();

    function handleLogOut() {
        logOut();
        navigate('/')
    }
        console.log('jjj', search)

    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Sooqna logo"
              style={{width: '5rem',
    height: 'auto',
    marginRight: '18rem'}}
            />
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Brand href="/about">About</Navbar.Brand>
                <Navbar.Brand href="/contact">Contact Us</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                        maxHeight: '100px'
                    }}
                        navbarScroll>
                        {/* <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link> */}
                        <NavDropdown title={filter} id="navbarScrollingDropdown" style={{marginLeft: '6rem'}}>
                            <NavDropdown.Item onClick={() => {
                                seSearch({ ...search, filteredBy: 'name' })
                                setFilter('Product')
                            }} >Product</NavDropdown.Item>
                            
                            <NavDropdown.Item onClick={() => {
                                seSearch({ ...search, filteredBy: 'color' })
                                setFilter('Color')
                            }}>
                                Color
                            </NavDropdown.Item>

                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item onClick={() => {
                                seSearch({ ...search, filteredBy: 'category' })
                                setFilter('Category')
                            }} >
                                Category
                            </NavDropdown.Item>

                            <NavDropdown.Item onClick={() => {
                                seSearch({ ...search, filteredBy: 'price' })
                                setFilter('Price')
                            }} >
                                Price
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        onChange={(e) => { seSearch({ ...search, input: e.target.value }) }}
                        />
                        <BsSearch
                            style={{
                            width: '10rem',
                            height: '2rem'
                            }}
                        onClick={() => { searchBy(search) }}
                        />
                        <Button variant="outline-warning" style={{marginLeft: '4rem'}} onClick={() => navigate('/signin')} >SignIn</Button>
                        <Button variant="outline-warning" onClick={() => navigate('/signup')}>SignUp</Button>
                        {/* <Button variant="outline-success" onClick={handleLogOut} >LogOut</Button>
                        <Button variant="outline-success" onClick={() => navigate('/product')}>AddProduct</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;