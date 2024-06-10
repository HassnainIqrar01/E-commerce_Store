import React, {useEffect} from "react";

const Order = ({Ordata,hideCartFun}) => {


  useEffect(() => {
    document.body.style.overflowY = 'hidden'
  
    return () => {
      document.body.style.overflowY = 'scroll'
  
    };
  }, []);



  return <>
  <div onClick={hideCartFun} className="modal-container">
<div className='cart-modal'>
        <i
          class='fa-solid fa-circle-xmark fa-icon float-end  fs-2 mt-2 me-2 '
          onClick={hideCartFun}
        ></i>
        

        <div className='row mt-5'>
          <div className='col-12 '>
          {Ordata.length !== 0 && <h2>Your Orders</h2>}
            {Ordata.map((p) => {
              return (
                <>
                <div className="card mb-4">
                  <div className='row  '>
                    <div className='col-3'>
                      <img
                        src={p.img}
                        alt='cart-img'
                        className='w-100 '
                      />
                    </div>
                    <div className='col-9'>
                      <strong>{p.title}</strong>                      
                      <br />
                      <strong>Rs.{p.price}</strong>
                      <p className="product-desc">{p.desc}</p>

                    </div>
                  </div>
                  </div>
                </>
              );
            })}

          </div>
        </div>

        {Ordata.length === 0 &&  <button className='empty-cart-btn btn'>No Orders</button>       
       }        
      </div>
</div>
  </>;
};

export default Order;


