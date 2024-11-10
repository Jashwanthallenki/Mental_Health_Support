import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
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
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Therapists</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="notificationButton" data-bs-toggle="modal" data-bs-target="#notificationModal">
                            <i className="fas fa-bell"></i>
                            <span className="badge bg-danger" id="notificationCount">3</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;