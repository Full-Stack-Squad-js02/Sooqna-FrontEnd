import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../../auth/index';
import {createItem} from '../../api/api'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateItem() {
    const navigate = useNavigate();
    const [item,
        setItem] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        color: '',
        categories: [
            'ELECTRONICS', 'GAMES', 'FASHION' , 'CARS' , 'Toys' , 'Home' , 'Books' , 'PETS' , 'FOOD' , 'OTHER'
        ],

        title: '',
        image: '',
        description: '',
        quantity: '',
        color: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false
    });
    const {user, token} = isAuthenticated();
    const {
        title,
        description,
        price,
        categories,
        quantity,
        image,
        color,
        loading,
        error,
        createdProduct,
        redirectToProfile
    } = item;

    const handleChange = name => event => {
        const value = event.target.value;
        setItem({
            ...item,
            [name]: value,
            loading: false,
            createdProduct: ''
        });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setItem({
            ...item,
            error: '',
            loading: true
        });
        createItem(user.id, token, item).then(data => {
            if (data.error) {
                setItem({
                    ...item,
                    error: data.error
                });
            } else {
                setItem({
                    ...item,
                    title: '',
                    description: '',
                    image: '',
                    price: '',
                    category: '',
                    color: '',
                    quantity: '',
                    loading: false,
                    createdProduct: data.data.name
                });
            }
            window
                .location
                .reload();
        });
    };

const  BasicExample=()=> {
  return (
      <div style={{ display: 'flex' }}>
          
          <div>
              <img
                  className="d-block w-100 h-1"
                  src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png"
                  alt="First slide"
                  style={{ marginTop: '6.5rem' }}
              />
          </div>

    <Form style={{width: "30rem" , margin: "7rem"}}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Product </Form.Label>
        <Form.Control type="text"
        value={title}onChange={handleChange("title")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description" style={{height:'5rem'}}>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"
        value={description}onChange={handleChange("description")} />
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="color">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" 
        value={color}onChange={handleChange("color")}/>
      </Form.Group>


       <br/>

      <Form.Select aria-label="Default select example" style={{width: '30rem', height: '2.5rem'}}>
       <option style={{ color: "#4051a5" }}>Select category</option>
       {categories && categories.map((c, i) => (
                             <option key={i} value={c}>
                                 {c}
                             </option>
                         ))}
     </Form.Select>

     <br/>
     <br/>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" 
        value={price}onChange={handleChange("price")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number"
        value={quantity}onChange={handleChange("quantity")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" 
        value={image}onChange={handleChange("image")}/>
      </Form.Group>
         <br/>
         <br/>
      <Button variant="success" type="submit" onClick={clickSubmit}>Create Product</Button> {' '}
        <Button variant="danger" type="submit" onClick={() => { navigate('/user') }}> Cancel</Button>
    </Form>
    </div>

  );
}





const showSuccess = () => (
      <div
          className="alert alert-info"
          style={{
          display: createdProduct
              ? ''
              : 'none'
      }}>
          <h2>{`${createdProduct}`}
              is created!</h2>
      </div>
  );
  const showError = () => (
      <div
          className="alert alert-danger"
          style={{
          display: error
              ? ''
              : 'none'
      }}>
          {error}
      </div>
  );
  const showLoading = () => loading && (
      <div className="alert alert-success">
          <h2>Loading...</h2>
      </div>
  );
  
  return (
      <div>
          {showLoading()}
          {showSuccess()}
          {showError()}
         <div style={{display:'flex'}}>{BasicExample()}</div> 
      </div>
  );
}
  
