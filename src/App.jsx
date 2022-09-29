import './App.css';
import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/CreateProductForm';
import MyProduct from './components/myProduct/myProducts';
import MyCart from './components/Cart/myCart';
import ProductCard from './components/Product/SingleProductPage';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Wishlist from './components/Wishlist/Wishlist';
import UserInfo from './components/UserProfile/UserInfo';
import Setting from './components/UserProfile/Setting';
import UserPage from './components/UserPage/UserPage';
import MyOrders from './components/Orders/MyOrders';
import OrderForm from './components/Orders/OrderForm';

import UpdateProduct from './components/Product/UpdateProduct'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/star' element={< Header />}/>
                    <Route path='/about' element={< AboutPage />}/>
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    <Route path='/myproducts' element={<MyProduct/>} />
                    <Route path='/myCart' element={<MyCart/>} />
                    <Route path='/viewdetails' element={<ProductCard/>}/>
                    <Route path='/Wishlist' element={<Wishlist/>}/>
                    <Route path='/userinfo' element={<UserInfo/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                    <Route path='/user' element={<UserPage/>}/>
                    <Route path='/myorders' element={<MyOrders/>}/>

                    <Route path='/orderform' element={<OrderForm/>}/>

                    <Route path='/updateproduct' element={<UpdateProduct/>}/>

                </Routes>
                <Contact/>
            </BrowserRouter>
            {/* <Header/> */}
        </div>
    );
}

export default App;
