import React, { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Link,  useNavigate } from 'react-router-dom';
import { removeFromCart , emptyCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()


  const getTotal = ()=>{
    if(cartArray.length>0){
    setTotal(cartArray?.map(item =>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  } 
  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart =()=>{
    alert('Thankyou.... your order place successfuly')
    dispatch(emptyCart())
   navigate('/')
  }
  return (
    <div style={{marginTop:'150px'}}>
           { cartArray?.length>0?
      <div  className='row w-100'>

     <div className='col-lg-6 m-5'>
    <table className='table border shadow'>
    <thead>
      <tr>
        <th>#</th>
        <th>product</th>
        <th>image</th>
        <th>price</th>
        <th>actio</th>
       </tr>
    </thead>
    <tbody>
      {cartArray?.map((item,index)=>( <tr>
        <td>{index+1}</td>
        <td>{item.title}</td>
        <td><img width={'100%'} height={'100px'} src={item.image}  alt="" /></td>
        <td>{item.price}</td>
        <td><Button onClick={()=>dispatch(removeFromCart(item.id))}  variant="outline-danger rounded"><i class="fa-solid fa-trash"></i> </Button></td>
      </tr>))
     }
    </tbody>
    </table>
    </div>
    <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
      <div className='border shadow p-5 mb-5'>
        <h4 className='text-primary fw-bold '  style={{overflowY:'hidden'}}> cart summary</h4>
        <h4 style={{overflowY:'hidden'}}>total number of product: <span  className='fw-bold'>{cartArray.length}</span></h4>
        <h4 className='fw-bold' style={{overflowY:'hidden'}}>total price ₹:{total}</h4>
        <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>checkout</button>
      </div>
    </div>
    

      </div>
      : <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
    <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" height={'300px'} />
    <h4 className='text-danger mt-3'>your cart is empty</h4>
    <Link to={'/'} >back to Home</Link>
    </div>
    }
  
    </div>
  )
}

export default Cart