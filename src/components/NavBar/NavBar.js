import React, { useEffect, useState } from 'react';
import {Tabs, Tab, Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import {logOut} from '../../auth';
// import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';


export default function NavBar() {
    const [search, seSearch] = useState({
        input: '',
        filteredBy:''
    });

    const navigate = useNavigate();
    const [value,
        setValue] = React.useState('one');
    
    const filterBy = (event) =>{
        // console.log(event);
        //     seSearch({
        //     ...search,
        //         filteredBy: event,
        //   });
    }


    // console.log(value)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    function handleLogOut() {
        logOut();
        navigate('/')
    }
    
    // function handleNavigate() {
    //     if(value === 'one')  navigate('/')
    // }

    // useEffect(() => {
    //     handleNavigate();
    // }, [])
    
    return (
        <Box sx={{
            width: '100%'
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab value="one" label="Home" />
                <Tab value="two" label="About"/>
                <Tab value="three" label="Contact Us"/>
            </Tabs>
                <Button variant="contained" onClick={() => navigate('/signup')}>Sign Up</Button>
                <Button variant="outlined" onClick={() => navigate('/signin')}>Sign In</Button>
                <Button variant="outlined" onClick={handleLogOut} >Log Out</Button>
            <div style={{display:'flex'}}>
                <DropdownButton id="dropdown-basic-button" title="Filter By">
                    <Dropdown.Item  onClick={filterBy('name')}>Product</Dropdown.Item>
                    <Dropdown.Item  onClick={filterBy('color')}>Color</Dropdown.Item>
                    <Dropdown.Item  onClick={filterBy('category')} >Category</Dropdown.Item>
                    <Dropdown.Item  onClick={filterBy('price')} >Price</Dropdown.Item>
            </DropdownButton>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                </Form>
                <SearchOutlinedIcon fontSize="large" />
            </div>
        </Box>
        
    )}
