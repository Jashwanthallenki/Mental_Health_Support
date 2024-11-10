import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Notification(){
    function markAllAsRead() {
        // Change notification count and update the UI
        document.getElementById('notificationCount').innerText = "0";
        // Optionally, remove notifications in the modal or mark them as read
    }
    return(
        <div className="modal fade" id="notificationModal" tabIndex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="notificationModalLabel">Notifications</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="notification-item">
                    <i className="fas fa-info-circle me-3"></i> New community member joined!
                </div>
                <div className="notification-item">
                    <i className="fas fa-comment-dots me-3"></i> You have a new message in the chat.
                </div>
                <div className="notification-item">
                    <i className="fas fa-tasks me-3"></i> New resources available in the dashboard.
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => markAllAsRead()}>Mark all as read</button>
            </div>
        </div>
    </div>
</div>

    )
}
export default Notification;