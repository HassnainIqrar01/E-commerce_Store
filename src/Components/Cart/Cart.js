import React, { useEffect } from "react";

const Cart = ({ hideCartFun, cartProducts, subtotal, confirmOrder, deleteProduct }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);


  return (
    <>
      <div className='cart-modal'>
        <i
          className='fa-solid fa-circle-xmark fa-icon float-end fs-2 mt-2 me-2 '
          onClick={hideCartFun}
        ></i>
        <hr className='my-5' />

        <div className='row'>
          <div className='col-12 '>
            {cartProducts.map((p) => {
              return (
                <div className='row mb-3' key={p.id}>
                  <div className='col-3'>
                    <img
                      src={p.img}
                      alt='cart-img'
                      className='w-100 bg-light'
                    />
                  </div>
                  <div className='col-6'>
                    <strong>{p.title}</strong>
                    <br />
                    <strong>Rs.{p.price}</strong>
                  </div>
                  <div className='col-3'>
                    <button className='btn btn-danger' onClick={() => deleteProduct(p.id)}>Delete</button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        {cartProducts.length === 0 ?
          <button className='empty-cart-btn btn'>Cart is empty</button> :
          <div className='cart-total '>
            <strong className='me-2'>SubTotal: Rs.{subtotal}</strong>
            <button className='order-cart-btn btn' onClick={confirmOrder}>Confirm Order</button>
          </div>
        }
      </div>
    </>
  );
};

export default Cart;