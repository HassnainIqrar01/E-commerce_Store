import React from "react";
const Products = ({productsData , title, addToCart}) => {
  return (
    <>
      <div className='container'>
        <div className='row '>
          <div className='col-12'>
            <h1 className='productTitle'>{title}</h1>
          </div>
        </div>
        <div className='row g-4'>
          {productsData.map((product) => {             
            return (
              <div              
                className='products-container col-lg-3 col-md-4 col-sm-6 col-6'
                key={product.title}
               
              >
                <div className='product-img-container'>
                  <img src={product.img} alt='product' />
                </div>
                <div className='my-2'>
                  <strong className='product-desc'>{product.title}</strong>
                  <br />
                  <small className='product-desc'>{product.desc}</small>
                  <br />
                  <strong>Rs.{product.price}</strong>
                <button className="btn btn-dark addToCartBtn float-end " onClick={() => addToCart(product)} >Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </>
  );
};

export default Products;
