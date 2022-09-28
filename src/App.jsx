import './App.css';
// import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/CreateProductForm';
import MyProduct from './components/myProduct/myProducts';
import ProductCard from './components/Product/SingleProductPage';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import UserInfo from './components/UserProfile/UserInfo';
import Setting from './components/UserProfile/Setting';
import UserPage from './components/UserPage/UserPage';
import MyOrders from './components/Orders/MyOrders';
// import Bar from './components/NavBar/Bar';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <Bar/> */}
                <NavBar/> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    <Route path='/about' element={< AboutPage />}/>
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/MyProduct' element={<MyProduct/>} />
                    <Route path='/viewdetails' element={<ProductCard/>}/>
                    <Route path='/userinfo' element={<UserInfo/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                    <Route path='/user' element={<UserPage/>}/>
                    <Route path='/myorders' element={<MyOrders/>}/>
                </Routes>
                <Contact/>
                {/* <SlideShow /> */}
                {/* < Home /> */}
                {/* <ProductCard/> */}
                {/* <AboutPage/> */}
            </BrowserRouter>
            {/* <Header/> */}
        </div>
    );
}

export default App;
