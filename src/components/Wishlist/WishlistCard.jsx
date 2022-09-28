import {Card , Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
// import './Home.css';

function WishlistCard() {
    const navigate = useNavigate();
    return (
        <Card id='homeCard'>
            <Card.Img
                variant="top"
                src="https://source.unsplash.com/random?product"/>
            <Card.Body>
                <Card.Title>Wishlist</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <Card.Title>Price</Card.Title>
                <Button variant="primary" onClick={() => navigate('/viewdetails')}>View Details</Button>
            </Card.Body>
        </Card>
    );
}

export default WishlistCard;