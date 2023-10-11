import React from 'react'
import {Link} from  'react-router-dom';

function Header() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/"><img  className="logo_header img-fluid" src="images/dbvertex_logo.png" alt="dbvertex_logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHeader" aria-controls="offcanvasHeaderLabel" aria-expanded="false" aria-label="Toggle navigation">   
      <span className=""><img  className="Header_navbar_icon img-fluid" src="images/menu.png" alt="menu" /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active header_option" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link header_option" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link header_option" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link header_option"  to="/Portfolio">Portfolio</Link>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <i class="bi bi-facebook header_option_socialicon"></i>
        </li>
        <li className="nav-item">
        <i class="bi bi-linkedin header_option_socialicon"></i>
        </li>
        <li className="nav-item">
        <i class="bi bi-twitter header_option_socialicon"></i>
        </li>

        <li className="nav-item">
        <i class="bi bi-instagram header_option_socialicon"></i>
        </li>
      </ul>

    </div>
  </div>
</nav>

<div className="offcanvas offcanvas-end " data-bs-scroll="true" tabindex="-1" id="offcanvasHeader" aria-labelledby="offcanvasHeaderLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title header_option" id="offcanvasWithBothOptionsLabel">DB Vertex Technologies</h5>
    <img  className="Header_navbar__cross_icon" src="images/close.png" alt="menu" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body">
  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item mb-2">
         <Link className="nav-link active header_option" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mb-2">
        <Link className="nav-link header_option" to="/about">About Us</Link>
        </li>
        <li className="nav-item mb-2">
        <Link className="nav-link header_option" to="/Services">Services</Link>
        </li>
        <li className="nav-item mb-2">
        <Link className="nav-link header_option"  to="/Portfolio">Portfolio</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <i class="bi bi-facebook header_option_socialicon"></i>
        <i class="bi bi-linkedin header_option_socialicon"></i>
        <i class="bi bi-twitter header_option_socialicon"></i>
        <i class="bi bi-instagram header_option_socialicon"></i>
        </li>
      </ul>
  </div>
</div>

      </div>


    );
  }
  
  export default Header;