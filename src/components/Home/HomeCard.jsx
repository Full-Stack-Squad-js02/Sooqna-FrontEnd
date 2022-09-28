// import Button from 'react-bootstrap/Button';
import {Card, Button} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../../auth';
import {BsCartPlus} from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
// import { MDBRipple } from 'mdb-react-ui-kit';
import './Home.css';

function HomeCard() {
    const navigate = useNavigate();
    return (
        <>
            {/* <MDBRipple
                className='bg-image hover-overlay shadow-1-strong rounded'
                rippleTag='div'
                rippleColor='light'
            >
                <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
                <a href='#!'>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>
            </MDBRipple> */}
        <Card onClick={() => navigate('/viewdetails')} id='Card'>
                <Card.Img variant="top" src="https://source.unsplash.com/random?product"/>
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <Card.Title>Price</Card.Title>
                
                {isAuthenticated()?
                    <>
                        < MdOutlineFavoriteBorder className="icons"/>
                        <BsCartPlus className="icons"/>
                    </>
                    : <Button variant="primary" onClick={() => navigate('/viewdetails')}>View Details</Button>}
            </Card.Body>
            </Card>
        </>
    );
}

export default HomeCard;