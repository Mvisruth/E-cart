import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromwishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {
 const wishlistArray = useSelector((state)=>state.wishlistReducer) 
 console.log(wishlistArray);
 const dispatch = useDispatch()

 const handlewishlist = (item)=>{
  dispatch(addToCart(item))
  dispatch(removeFromwishlist(item.id))
 }

  return (
    <div>
      <Row className='ms-3 me-3' style={{marginTop:'150px'}}>
        { wishlistArray?.length>0?
        wishlistArray?.map((item)=>(   <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
          <Card.Body >
            <Card.Title className='fw-bold' style={{overflowY:'hidden'}}>{item.title.slice(0,20)}...</Card.Title>
            <Card.Text>
            <p>....</p>
            <p className='fw-bold'>price: Rs{item.price}</p>
            </Card.Text>
           <div className='d-flex align-item-center justify-content-between '>
                <Button onClick={()=>dispatch(removeFromwishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i> </Button>
                <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i> </Button>
           </div>
          </Card.Body>
        </Card>
        </Col>)):
 <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>

  <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" height={'300px'} />
  <h4 className='text-danger mt-3'>your wishlist is empty</h4>
  <Link to={'/'} >back to Home</Link>
 </div>
}
   </Row>
</div>
  )
}

export default Wishlist