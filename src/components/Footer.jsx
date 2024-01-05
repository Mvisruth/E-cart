import React from 'react'
import { Link  } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px', color:'white'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-dark'>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
    <div className="website " style={{width:"400px"}}>
<h4 class='mb-3' style={{overflowY:'hidden'}}>
<i class="fs-4 fa-solid fa-cart-shopping me-2"></i>
            E-Cart
</h4>
<h6 style={{overflowY:'hidden'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos odit sequi magnam ratione animi totam mollitia delectus consequuntur possimus accusamus fugit dolorem impedit voluptates deserunt soluta.</h6>
    </div>
    <div className="links d-flex flex-column">
      <h4 className='mb-3' style={{overflowY:'hidden'}}>Links</h4>
      <Link to={'/'} style={{textDecoration:'none',color:'white' }}>Home page</Link>
      <Link to={'/cart'} style={{textDecoration:'none',color:'white' }}>cart page</Link>
      <Link to={'/wishlist'} style={{textDecoration:'none',color:'white' }}>Wishlist</Link>

       
    </div>
    <div className="guid d-flex flex-column">
    <h4 className='mb-3'style={{overflowY:'hidden'}}>Guides</h4>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white' }}>React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white' }}>React Bootstrap</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white' }}>Bootswatch</Link>
    </div>
    <div className="contact  d-flex flex-column">
      <h4 className='mb-3'style={{overflowY:'hidden'}}>contact us</h4>
      <div className='d-flex mb-3'>
        <input type="text" className='form-control' placeholder='Enter your Email' />
        <button className='btn btn-warning ms-2'>subscribe</button>
      </div>

      <div className='d-flex justify-content-evenly align-item-center'>
          
      <Link to={'/'} style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
      <Link to={'/home'} style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>


      </div>
       </div>
    </div>
    <p className='mt-5'>copyright  2023 media player,build with react.</p>

  </div>
  )
}

export default Footer