// import Button from 'react-bootstrap/Button';
import {Card, Button} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../../auth';
import {BsCartPlus} from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {getOneProducts} from '../../api/api'
// import { MDBRipple } from 'mdb-react-ui-kit';
import './Home.css';

function HomeCard({ product }) {
    const navigate = useNavigate();
    console.log('ccccc', product);
    return (
        <>
        <Card onClick={() => navigate('/viewdetails')} id='Card'>
                <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                    <Card.Title>Price : {product.price }</Card.Title>
                
                {isAuthenticated()?
                    <>
                        < MdOutlineFavoriteBorder className="icons"/>
                        <BsCartPlus className="icons"/>
                    </>
                    : <Button variant="primary" onClick={() => {
                        getOneProducts(product.id);
                        navigate('/viewdetails')
                        }}>View Details</Button>}
            </Card.Body>
            </Card>
        </>
    );
}

export default HomeCard;