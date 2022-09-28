// import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';
// import {isAuthenticated} from '../../auth/index';
// import {createItem} from '../../api/api'
// import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { MDBCardImage , MDBCol} from "mdb-react-ui-kit";



// export default function CreateItem() {
//     const [item,
//         setItem] = useState({
//         title: '',
//         description: '',
//         price: '',
//         quantity: '',
//         color: '',
//         categories: [
//             'ELECTRONICS', 'GAMES', 'FASHION'
//         ],
//         title: '',
//         image: '',
//         description: '',
//         quantity: '',
//         color: '',
//         loading: false,
//         error: '',
//         createdProduct: '',
//         redirectToProfile: false
//     });
//     const {user, token} = isAuthenticated();
    // const {
    //     title,
    //     description,
    //     price,
    //     categories,
    //     quantity,
    //     image,
    //     color,
    //     loading,
    //     error,
    //     createdProduct,
    //     redirectToProfile
    // } = item;

//     const handleChange = name => event => {
//         const value = event.target.value;
//         setItem({
//             ...item,
//             [name]: value,
//             loading: false,
//             createdProduct: ''
//         });
//     };

//     const clickSubmit = event => {
//         event.preventDefault();
//         // console.log('pppppp',event)
//         setItem({
//             ...item,
//             error: '',
//             loading: true
//         });
//         // console.log('lllllll',item)
//         createItem(user.id, token, item).then(data => {
//             if (data.error) {
//                 setItem({
//                     ...item,
//                     error: data.error
//                 });
//             } else {
//                 setItem({
//                     ...item,
//                     title: '',
//                     description: '',
//                     image: '',
//                     price: '',
//                     category: '',
//                     color: '',
//                     quantity: '',
//                     loading: false,
//                     createdProduct: data.data.name
//                 });
//             }
//             window
//                 .location
//                 .reload();
//         });
//     };




//     const newItemForm = () => (
  
//     //  style={{ display: 'block', 
//     //               width: 700, 
//     //               padding: 30 }}>
                    
                
//                     <>
//       <h5 style={{ color: "#4051a5" }}>Add Product to Sooqna </h5>

      
//       <Form className="mb-3" onSubmit={clickSubmit}>
//       <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>title</Form.Label>
//                          <input
//                         required
//                         type="text" 
//                         placeholder="Enter your Product name"
//                         onChange={handleChange('title')}
//                         className="form-control"
//                         value={title}/>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>Product description</Form.Label>
//           <input
//                         required
//                         placeholder="Enter your description" 
//                         onChange={handleChange('description')}
//                         className="form-control"
//                         value={description}/>
//         </Form.Group>
//         <Form.Group>
//       <br/>

//  <Form.Select aria-label="Default select example">
//       <option style={{ color: "#4051a5" }}>Select category</option>
//       {categories && categories.map((c, i) => (
//                             <option key={i} value={c}>
//                                 {c}
//                             </option>
//                         ))}
//     </Form.Select>
//                     <br/>
                        
//         </Form.Group>
//         <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>Price</Form.Label>
//           <input
//           type="number"
//            placeholder="Enter product price" 
//                         required
//                         onChange={handleChange('price')}
//                         className="form-control"
//                         value={price}/>
//         </Form.Group>
//         <br/>
//         <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>Product Color:</Form.Label>
//                         <input
//                         type="text" 
//                         placeholder="Enter product's color"
//                         required
//                         onChange={handleChange('color')}
//                         className="form-control"
//                         value={color}/>

//         </Form.Group>
//         <br/>
//         <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>Quantity:</Form.Label>
//           <input
//           type="number" 
//           placeholder="Enter quantity" 
//                         required
//                         onChange={handleChange('quantity')}
//                         className="form-control"
//                         value={quantity}/>
//         </Form.Group>

// <br/>
       
//         <Form.Group>
//           <Form.Label style={{ color: "#4051a5" }}>Image</Form.Label>
        
//           <FileBase64
//                         required
//                         type="file"
//                         multiple={false}
//               onDone={({ base64 }) => {
//                 console.log(base64)
//                 setItem({
//                         ...item,
//                         image: base64
//                     })}}/>
//         </Form.Group>
//         <br/>
//         <Button variant="outline-warning" style={{marginLeft: '4rem'}}>Submit Form</Button>

        
//       </Form>

     
// <div>
// <img
//           className="d-block w-100 h-1"
//           src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png"
//           alt="First slide"
//         />
// </div>
    

// </>

//   );
  
//   const showSuccess = () => (
//     <div
//         className="alert alert-info"
//         style={{
//         display: createdProduct
//             ? ''
//             : 'none'
//     }}>
//         <h2>{`${createdProduct}`}
//             is created!</h2>
//     </div>
// );
// const showError = () => (
//     <div
//         className="alert alert-danger"
//         style={{
//         display: error
//             ? ''
//             : 'none'
//     }}>
//         {error}
//     </div>
// );
// const showLoading = () => loading && (
//     <div className="alert alert-success">
//         <h2>Loading...</h2>
//     </div>
// );

// return (
//     <div>
//         {showLoading()}
//         {showSuccess()}
//         {showError()}
//        <div style={{display:'flex'}}>{newItemForm()}</div> 
//     </div>
// );
// };


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <div style={{display:'flex'}}>
    <Form style={{width: "30rem" , margin: "7rem"}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{height:'5rem'}}>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" />
      </Form.Group>


       <br/>

      <Form.Select aria-label="Default select example" style={{width: '30rem', height: '2.5rem'}}>
       <option style={{ color: "#4051a5" }}>Select category</option>
       {/* {categories && categories.map((c, i) => (
                             <option key={i} value={c}>
                                 {c}
                             </option>
                         ))} */}
     </Form.Select>

     <br/>
     <br/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group>

           <Form.Label style={{ color: "#4051a5" }}>Image</Form.Label>
        
           <FileBase64
                         required
                         type="file"
                         multiple={false}
              //  onDone={({ base64 }) => {
              //    console.log(base64)
                //  setItem({
                //          ...item,
                    //      image: base64
                    //  })}}
                     />
         </Form.Group>
         <br/>
         <br/>
      <Button variant="warning" type="submit">
        Create Product
      </Button>
    </Form>
    <div>
    <img
              className="d-block w-100 h-1"
              src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png"
              alt="First slide"
              style={{marginTop:'6.5rem'}}
              />
              </div>
    </div>

  );
}




export default BasicExample;