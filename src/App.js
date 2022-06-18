import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Kids from '../src/Pages/Kids/Kids';
import Furniture from './Pages/Furniture';
import Rugs from './Pages/Rugs';
import Decor from './Pages/Decor';
import Bedding from './Pages/Bedding';
import HomeImprovement from './Pages/HomeImprovement';
import Lightning from './Pages/Lightning';
import Kitchen from './Pages/Kitchen';
import More from './Pages/More';
import Outdoor from './Pages/Outdoor';
import Ideas from './Pages/Ideas';
import Sales from './Pages/Sales';
import LandingPage from '../src/Pages/Landing/LandingPage';
import Product from './Pages/Products/Product';
import Detail from './Pages/Details/Details';
import Cart from './Pages/Cart/Cart';
import Sign from './Pages/Sign/Sign';
import CheckOut from './Pages/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       
       {/* <CheckOut/> */}
       {/* <Sign/> */}
       {/* <Cart/> */}
       {/* <Detail/> */}
       {/* <Product/> */}
       {/* <LandingPage/> */}
       {/* <Product/> */}
       <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact  path='/kids' element={<Kids/>} ></Route>
        <Route exact path='/products' element={<Product/> } />
        <Route exact path='/products/:id' element={<Detail/> } />
        <Route exact path='/details' element={<Detail/>} />
        <Route exact path='/details/:id' element={<Cart/>} />
        <Route exact path='/cart' element={<Cart/>} /> 
        <Route exact path='/sign' element={<Sign/>} />
         <Route path="/checkout" element={<CheckOut/>} />
        <Route path='/furniture' element={<Furniture/>}></Route>
        <Route path='/rugs' element={<Rugs/>}></Route>
        <Route path='/decor' element={<Decor/>}></Route>
        <Route path='/bedding' element={<Bedding/>}></Route>
        <Route path='/homeimprove' element={<HomeImprovement/>}></Route>
        <Route path='/lightning' element={<Lightning/>}></Route>
        <Route path='/kitchen' element={<Kitchen/>}></Route>
        <Route path='/more' element={<More/>}></Route>
        <Route path='/outdoor' element={<Outdoor/>}></Route>
        <Route path='/idea' element={<Ideas/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
       </Routes>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
