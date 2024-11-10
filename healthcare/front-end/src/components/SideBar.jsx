import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SideBar(){
    return(
        <div className="sidebar">
    <div className="px-3 mb-4">
        <h4 className="text-white">MindConnect</h4>
    </div>
    <nav className="nav flex-column">
        <a href="#" className="nav-link active">
            <i className="fas fa-home me-2"></i> Dashboard
        </a>
        <a href="#" className="nav-link">
            <i className="fas fa-tasks me-2"></i> Resources
        </a>
        <a href="#" className="nav-link">
            <i className="fas fa-cog me-2"></i> Settings
        </a>
    </nav>
</div>

    )
}
export default  SideBar;