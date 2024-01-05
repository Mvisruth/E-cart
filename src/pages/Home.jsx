import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
   const data = useFetch('https://fakestoreapi.com/products')
   console.log(data)
   //to call a function that add value to state

   const dispatch = useDispatch()
  return (
<Row className='ms-3 me-3' style={{marginTop:'150px'}}>
    { data?.length>0?
    data?.map((item)=>( <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
      <Card.Body >
        <Card.Title className='fw-bold' style={{overflowY:'hidden'}}>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>{item.description.slice(0,40)}...</p>
        <p className='fw-bold'>price: Rs {item.price}</p>
       <div className='d-flex align-item-center justify-content-between '>
            <Button onClick={()=>dispatch(addtowishlist(item))} variant="outline-danger rounded"><i class="fa-solid fa-heart"></i> </Button>
            <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i> </Button>
    
       </div>
      </Card.Body>
    </Card>
    </Col>))
   :<p>nothing to dispaly</p>
    }
</Row>
  )
}
export default Home



