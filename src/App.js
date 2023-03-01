
import './App.css';
import {Routes,Route } from 'react-router-dom'
import Navbar from './Layout/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Post/Products';
import AboutUs from './Pages/Account/AboutUs'
import Footer from './Layout/Footer';
import Message from './Pages/Messages/Message';
import CardDetails from './Pages/Post/CardDetails';
import Card from "./Pages/Post/Card";
import product from './Pages/Post/product'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
      <Route exact path="/" element={<Home /> }></Route>
      <Route exact path="/account" element={<AboutUs /> }></Route>
      <Route exact path="/post" element={<Products /> }></Route>
      <Route exact path="/message" element={<Message/> }></Route>
      <Route path='/postdetail/:id' element= {<CardDetails product={product}/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
