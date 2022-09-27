import React, {useEffect, useState} from 'react';
import {Tabs, Tab, Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Form, Dropdown, DropdownButton} from 'react-bootstrap';
import { logOut } from '../../auth';
import {searchBy} from '../../api/api'
import './Navbar.css';
// import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';

export default function NavBar() {
    const [search,
        seSearch] = useState({input: '', filteredBy: ''});

    const navigate = useNavigate();
    
    const [value,
        setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleLogOut() {
        logOut();
        navigate('/')
    }
console.log('jjj', search)
    // function handleNavigate() {     if(value === 'one')  navigate('/') }
    // useEffect(() => {     console.log('hhhhhhhhh',search); }, [search])

    return (
        <Box
            sx={{
            width: '100%'
        }}
            style={{
            display: 'flex'
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                style={{
                flex: 'auto'
            }}>
                <Tab value="one" label="Home"/>
                <Tab value="two" label="About"/>
                <Tab value="three" label="Contact Us"/>
            </Tabs>
            <div style={{
                display: 'flex'
            }}>
                <DropdownButton id="dropdown-basic-button" title="Filter By">
                    <Dropdown.Item onClick={() => {
                        seSearch({ ...search, filteredBy: 'name' })
                        // console.log('jjj', search)
                    }}>Product</Dropdown.Item>
                    <Dropdown.Item onClick={() => {seSearch({ ...search, filteredBy: 'color' })}}>Color</Dropdown.Item>
                    <Dropdown.Item onClick={() => {seSearch({ ...search, filteredBy: 'category' })}}>Category</Dropdown.Item>
                    <Dropdown.Item onClick={() => {seSearch({ ...search, filteredBy: 'price' })}} >Price</Dropdown.Item>
                </DropdownButton>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => { seSearch({ ...search, input: e.target.value })}}
                    />
                </Form>
                <SearchOutlinedIcon fontSize="large" onClick={()=>{searchBy(search)}}/>
            </div>
            <Button variant="contained" onClick={() => navigate('/signup')}>Sign Up</Button>
            <Button variant="outlined" onClick={() => navigate('/signin')}>Sign In</Button>
            <Button variant="outlined" onClick={handleLogOut}>Log Out</Button>
            <Button variant="outlined" onClick={() => navigate('/product')}>add product</Button>

        </Box>

    )
}
