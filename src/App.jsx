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
// import OrderForm from './components/Orders/OrderForm';
import ProductDetails from './components/Product/ProductDetails';
import UpdateProduct from './components/Product/UpdateProduct'
import { useState } from 'react';
import ApproveOrders from './components/Admin/ApproveOrders';
import Search from './components/Search/Search';
import ContextWrapper  from './context/context';
import AdminDashboard from './components/Admin/AdminDashboard'

function App() {

    const [searchData, setSearchData] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <ContextWrapper>
                <NavBar setSearchData={setSearchData} /> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/about' element={< AboutPage />}/>
                    <Route path='/searchbar' element={< Search searchData={searchData} />}/>
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    <Route path='/myproducts' element={<MyProduct/>} />
                    <Route path='/mycart' element={<MyCart />} />
                    <Route path='/viewdetails' element={<ProductCard/>}/>
                    <Route path='/Wishlist' element={<Wishlist/>}/>
                    <Route path='/userinfo' element={<UserInfo/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                    <Route path='/user' element={<UserPage/>}/>
                    <Route path='/myorders' element={<MyOrders/>}/>
                    {/* <Route path='/orderform' element={<OrderForm/>}/> */}
                    {/* <Route path='/product/:id' element={<ProductDetails/>}/> */}
                    <Route path='/updateproduct' element={<UpdateProduct/>}/>
                    <Route path='/approveorders' element={<ApproveOrders />}/>
                    <Route path='/admin' element={<AdminDashboard/>}/>
                    {/* <Route path='/hed' element={<Header/>}/> */}
                    {/* <Route path='/hed' element={<Header/>}/> */}

                    
                </Routes>
                <Contact />
                </ContextWrapper>
            </BrowserRouter>
            <Header/>
        </div>
    );
}

export default App;
