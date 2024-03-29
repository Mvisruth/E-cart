import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access the state value
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart)

  return (
    <Navbar expand="lg" className=" text bg-dark fixed-top">
    <Container>
      <Navbar.Brand  className='btn border border-light rounded ms-3 mt-2'><Link style={{textDecoration:'none' , color:'white'}} to={'/'}><i class="fs-1 fa-solid fa-cart-shopping text-warning me-3"></i>E-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-light rounded ms-3 mt-2'><Link style={{textDecoration:'none' , color:'white'}} to={'/wishlist'}><i class="fa-solid fa-heart text-danger me-2"></i>wishlist <Badge bg="light" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link  className='btn border border-light rounded ms-3 mt-2'><Link style={{textDecoration:'none' , color:'white'}} to={'/cart'}><i class="fa-solid fa-cart-shopping text-warning me-2"></i>cart  <Badge bg="light" className='rounded ms-2'>{cart.length}</Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header