// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

function HomeCard() {
    return (
        <Card style={{
            width: '18rem'
        }}>
            <Card.Img
                variant="top"
                src="https://image.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg"/>
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                <Card.Title>Price</Card.Title>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}

export default HomeCard;