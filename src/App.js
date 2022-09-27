import './App.css';
// import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import SlideShow from './components/Home/SlideShow';
import Product from './components/Product/Product';
import ProductCard from './components/Product/productCard';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar /> 
                <Routes>
                    <Route path='/' element={< Home />}/>
                    {/* <Route path='/' element={< Ab />}/> */}
                    <Route path='/signup' element={< Signup />}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}/>
                    <Route path='/contact' element={<Contact/>} />
                
                </Routes>
                {/* <SlideShow /> */}
                < Home />
                    {/* <ProductCard/> */}
                
            </BrowserRouter>
            {/* <Header/> */}
        </div>
    );
}

export default App;
