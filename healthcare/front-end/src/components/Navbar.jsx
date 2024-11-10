import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="#">MindConnect</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Services</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">Therapist List</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-white" to="#">Contact Us</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;
