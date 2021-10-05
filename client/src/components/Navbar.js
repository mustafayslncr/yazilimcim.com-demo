import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [mode,setMode]=useState(false)
    const card = useSelector(state=>state.card)
    const {cardItems} = card
   
    return (
        <nav className={mode ? 'navbar navbar-expand-lg navbar-dark bg-dark navnav' : 'navbar navbar-expand-lg navbar-light bg-light navnav'}>
  <div className="container-fluid">
      
    <Link style={{fontSize:'28px',marginLeft:'10px'}} className="navbar-brand" href="#"><i className="fas fa-user-secret"></i> YazılımCIM</Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link to="/" className="nav-link" aria-current="page">Anasayfa</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/iletisim" className="nav-link" >İletişim</Link>
        </li>
        <li className="nav-item dropdown mx-3">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hakkımızda
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">Hakkımda</Link></li>
            <li><Link className="dropdown-item" href="#">İletişim</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Yakında...</Link></li>
          </ul>
        </li>
        <li className="nav-item mx-3">
          <Link onClick={()=>setMode(mode ? false : true)} className="nav-link" href="#"  aria-disabled="true">
         {mode ? 'Dark Mode' : 'Light Mode'}
          </Link>
        </li>
        
      </ul>
      
    </div>
  </div>
  <Link to='/card'><div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',textAlign:'right',marginRight:'15px',padding:'3px'}}>
          <span style={{marginRight:'3px',color:mode ? 'white' : 'black',fontSize:'30px'}}><i class="fas fa-shopping-basket"></i></span>
         <span style={{color:'red',fontFamily:'sans-serif'}}>{cardItems.length>0 ? <span>{cardItems.length}</span> : 0}</span> 
        </div></Link> 
</nav>
    )
}
