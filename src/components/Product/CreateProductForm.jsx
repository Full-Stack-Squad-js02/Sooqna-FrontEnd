import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';
import {isAuthenticated} from '../../auth/index';
import {createItem} from '../../api/api'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
//     const {
//         title,
//         description,
//         price,
//         categories,
//         quantity,
//         image,
//         color,
//         loading,
//         error,
//         createdProduct,
//         redirectToProfile
//     } = item;

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





// const showSuccess = () => (
//       <div
//           className="alert alert-info"
//           style={{
//           display: createdProduct
//               ? ''
//               : 'none'
//       }}>
//           <h2>{`${createdProduct}`}
//               is created!</h2>
//       </div>
//   );
//   const showError = () => (
//       <div
//           className="alert alert-danger"
//           style={{
//           display: error
//               ? ''
//               : 'none'
//       }}>
//           {error}
//       </div>
//   );
//   const showLoading = () => loading && (
//       <div className="alert alert-success">
//           <h2>Loading...</h2>
//       </div>
//   );
  
//   return (
//       <div>
//           {showLoading()}
//           {showSuccess()}
//           {showError()}
//          <div style={{display:'flex'}}>{newItemForm()}</div> 
//       </div>
//   );
// }
  
export default BasicExample ;