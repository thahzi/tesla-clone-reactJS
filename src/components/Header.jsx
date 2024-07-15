import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Vehicles from './Vehicles';
import Energy from './Energy';





function Header() {
  const [open , setOpen] = useState(false);
  return (
    <>
    
   <div className="container-fuild justify-content-between align-items-center p-3 d-flex ">
    <div><h1 className='ms-5'>tesla</h1></div>
    <div className='d-flex '>
      <div>
        <h6 className='btn d-flex flex-column'onClick={()=> setOpen(!open)} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=> setOpen(false)}>Vehicles</h6>
        <Collapse in={open}><div><Vehicles/></div></Collapse>
      </div>
     
      <div>
        <h6 className='btn d-flex flex-column'onClick={()=> setOpen(!open)} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=> setOpen(false)}>Energy</h6>
        <Collapse in={open}><div><Energy/></div></Collapse>
      </div>
      <h6 className='btn'>Charging</h6>
      <h6 className='btn'>Discover</h6>
      <h6 className='btn'>Shop</h6>
    </div>
    <div className='me-5'>MENU</div>
   </div>

    
  
    
    </>
  )
}

export default Header