import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function MainContent() {

    function sendMessage() {
        const userInput = document.getElementById('userInput').value;
        const chatbox = document.getElementById('chatbox');

        if (userInput.trim() !== "") {
            const userMessage = document.createElement('p');
            userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
            chatbox.appendChild(userMessage);

            const botReply = document.createElement('p');
            botReply.innerHTML = `<strong>Chatbot:</strong> I'm here to listen and provide support.`;
            chatbox.appendChild(botReply);

            document.getElementById('userInput').value = "";  
            chatbox.scrollTop = chatbox.scrollHeight;  // Scroll chatbox to bot
        }
    }



    return (
        <div className="main-content" style={{ marginLeft: '250px', padding: '2rem' }}>
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
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Therapists</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="notificationButton"
                                    data-bs-toggle="modal"
                                    data-bs-target="#notificationModal"
                                >
                                    <i className="fas fa-bell"></i>
                                    <span className="badge bg-danger" id="notificationCount">3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row g-4 mb-4">
                <div className="col-md-6">
                    <div className="stats-card card bg-primary text-white">
                        <div className="card-body">
                            <h5 className="card-title">Anonymous Community</h5>
                            <p>Chat in this community to connect with people while being anonymous.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="stats-card card bg-warning">
                        <div className="card-body">
                            <h5 className="card-title">Friendly Community</h5>
                            <p>Chat here to socialize with people.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chatbot Section */}
            <div className="chatbot">
                <h3>AI Therapist</h3>
                <div className="chatbox" id="chatbox">
                    <p><strong>Mr. AI:</strong> Hello! How can I assist you today?</p>
                </div>
                <div className="user-input mb-4"> {/* Added mb-4 for margin bottom */}
                    <input type="text" id="userInput" placeholder="Type your message..." />
                    <button onClick={() => sendMessage()}>Send</button>
                </div>
            </div>

            {/* Find a Therapist! Button */}
            <div className="col-md-6 mt-4"> {/* Added mt-4 for margin top */}
                <div className="stats-card card bg-primary text-white">
                    <div className="card-body">
                        <h5 className="card-title">Find a Therapist!</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
