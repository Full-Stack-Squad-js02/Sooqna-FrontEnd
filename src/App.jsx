import './App.css';
import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/CreateProductForm';
import MyProduct from './components/myProduct/myProducts';
import Wishlist from './components/Wishlist/Wishlist';
import MyCart from './components/Cart/Cart';
import ProductCard from './components/Product/SingleProductPage';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import UserInfo from './components/UserProfile/UserInfo';
import Setting from './components/UserProfile/Setting';
import UserPage from './components/UserPage/UserPage';
import MyOrders from './components/Orders/MyOrders';
import OrderForm from './components/Orders/OrderForm';
import ProductDetails from './components/Product/ProductDetails';
import UpdateProduct from './components/Product/UpdateProduct'
import { useState, useEffect } from 'react';
import SubmitOrder from './components/Admin/SumbitOrder';
import Search from './components/Search/Search';
import { io } from "socket.io-client";

function App() {

    const [searchData, setSearchData] = useState([]);

    // console.log('AAAAAAAA',searchData)

    const [socket, setSocket] = useState(null);

    // useEffect(() => {
    //     setSocket(io("http://localhost/5000"));
    //         console.log(socket)

    // //     // console.log(socket.on("confirm-order", (msg) => {
    // //     //     console.log(msg)
    // //     // }))
    // }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar setSearchData={setSearchData} /> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/about' element={< AboutPage />}/>
                    <Route path='/searchbar' element={< Search searchData={searchData} />}/>
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    <Route path='/myproducts' element={<MyProduct/>} />
                    <Route path='/myCart' element={<MyCart />} />
                    <Route path='/viewdetails' element={<ProductCard/>}/>
                    <Route path='/Wishlist' element={<Wishlist/>}/>
                    <Route path='/userinfo' element={<UserInfo/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                    <Route path='/user' element={<UserPage/>}/>
                    <Route path='/myorders' element={<MyOrders/>}/>
                    <Route path='/orderform' element={<OrderForm/>}/>
                    {/* <Route path='/product/:id' element={<ProductDetails/>}/> */}
                    <Route path='/updateproduct' element={<UpdateProduct/>}/>
                    <Route path='/approveorders' element={<SubmitOrder/>}/>
                    <Route path='/hed' element={<Header/>}/>

                    
                </Routes>
                <Contact/>
            </BrowserRouter>
            {/* <Header/> */}
        </div>
    );
}

export default App;
