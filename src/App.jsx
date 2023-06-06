import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart2 from "./pages/Cart2";
import WebFont from "webfontloader"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { useEffect } from "react";


function App() {
  
  const user=useSelector((state)=>state.user.currentUser)
  return (
    
      <Router>
        <Header/>
        <Routes>
        
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/products/:category" element={<ProductList/>}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/login" element= {user?<Navigate to="/"/>:<Login/>}>
          
          </Route>
          <Route path="/register" element={user?<Navigate to="/"/>:<Register/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
