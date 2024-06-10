import React, { useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import { productsData } from "../../Data/Data";
import Cart from "../Cart/Cart";
import Order from "../Orders/Order";
import Auth from './auth'; 

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, placeOrder } from './cartSlice';

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const username = useSelector(state => state.auth.user?.username); 

  const dispatch = useDispatch();

  const [products, setProducts] = useState(productsData);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);


  const cartItems = useSelector(state => state.cart[username]?.cartItems || []);
  const orders = useSelector(state => state.cart[username]?.orders || []);

  const addCart = (product) => {
    dispatch(addToCart({ username, product })); 
  };

  const deleteProduct = (productId) => {
    dispatch(removeFromCart({ username, productId })); 
  };

  const order = () => {
    dispatch(placeOrder({ username })); 
  };

  const showCartProducts = () => {
    setShowCart(true);
  };

  const hideCartProducts = () => {
    setShowCart(false);
    setShowOrder(false);
  };

  const showOrderProducts = () => {
    setShowOrder(true);
  };

  const total = cartItems.reduce((initial, y) => initial + y.price, 0);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header
            orderdata={orders}
            showcart={showCart}
            cartLength={cartItems}
            showCartFun={showCartProducts}
            showOrderFun={showOrderProducts}
          />
          <Products
            title={"Products"}
            productsData={products}
            addToCart={addCart}
          />
          {showCart && (
            <Cart
              cartProducts={cartItems}
              confirmOrder={order}
              subtotal={total}
              hideCartFun={hideCartProducts}
              deleteProduct={deleteProduct}
            />
          )}
          {showOrder && <Order Ordata={orders} hideCartFun={hideCartProducts} />}
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default Home;
