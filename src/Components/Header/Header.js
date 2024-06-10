import React from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from "../Home/authSlice";



const Header = ({ cartLength, showCartFun, orderdata, showOrderFun }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className='container-fluid'>     
        <nav class='navbar navbar-light mb-5 py-4 '>
          <h1 className='navbar-brand text-white'>S Trades</h1>
          <i class='fa-solid fa-icon fa-cart-shopping ms-auto me-3' onClick={showCartFun}><p className="count" >{cartLength.length}</p></i>
          <i class='fa-solid fa-icon fa-bag-shopping' onClick={showOrderFun}><p className="count">{orderdata.length}</p></i>
          <button className="logout-button" onClick={handleLogout}>Logout</button> 
        </nav>

        <div className='row px-4 '>
          <div className='col-12 col-lg-6 mx-auto text'>
            <h1 className='h1 display-5 '>
              Everything under one roof so dont worry cz All you need is here!
            </h1>
            <span>Scroll down and Shop Now !!!</span>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default Header;
