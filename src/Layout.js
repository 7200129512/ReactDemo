import {  Link } from "react-router-dom";
import  './App.css';

const Layout = () => {
  return (
    <div>
       
  
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link id="link" to="/" >Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/blogs" id="link">Blogs</Link>
      </li>
      <li class="nav-item" >
      <Link to="/contact" id="link" >Contact</Link>
      </li>
      <li class="nav-item">
      <Link to="/service" id="link">Service</Link>
      </li>
      <li class="nav-item" >
      <Link to="/test" id="link" >Test</Link>
      </li>
    </ul>
  </div>
</nav>
      
    </div>
  )
};

export default Layout;