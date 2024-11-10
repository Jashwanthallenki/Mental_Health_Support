import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function MainContent() {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello! How can I assist you today?" }
    ]);

    async function sendMessage() {
        const userInput = document.getElementById('userInput').value;
        
        if (userInput.trim() === "") return;

        // Add the user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text: userInput }
        ]);

        // Send the message to the server
        try {
            const response = await fetch('http://localhost:3000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput })
            });

            const data = await response.json();

            // Add the bot's response to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: data.summary || "I'm here to listen and provide support." }
            ]);

        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: "Sorry, something went wrong. Please try again." }
            ]);
        }

        // Clear the input field
        document.getElementById('userInput').value = "";
    }

    return (
        <div className="main-content" style={{ marginLeft: '0.5em', padding: '2rem' }}>
           
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
                    {messages.map((msg, index) => (
                        <p key={index} style={{ margin: '0.5rem 0' }}>
                            <strong>{msg.sender === 'user' ? 'You:' : 'Chatbot:'}</strong> {msg.text}
                        </p>
                    ))}
                </div>
                <div className="user-input mb-4"> {/* Added mb-4 for margin bottom */}
                    <input type="text" id="userInput" placeholder="Type your message..." />
                    <button onClick={sendMessage}>Send</button>
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
