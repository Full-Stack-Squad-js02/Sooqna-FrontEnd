import './App.css';
// import Header from './components/Header/Header';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import SlideShow from './components/Home/SlideShow';
import Product from './components/Product/Product';
import ProductCard from './components/Product/productCard';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/About';
import NavBar from './components/NavBar/NavBar';
// import Bar from './components/NavBar/Bar';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <Bar/> */}
                <NavBar/> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    {/* <Route path='/' element={< Ab />}/> */}
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    {/* <Route path='/contact' element={<Contact/>} /> */}
                    <Route path='/viewdetails' element={<ProductCard/>}/>
                
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
