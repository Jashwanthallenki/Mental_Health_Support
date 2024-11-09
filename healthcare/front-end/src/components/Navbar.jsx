import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">MindConnect</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
