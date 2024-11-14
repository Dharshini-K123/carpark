import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simulate login logic
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Show an alert
        alert('Login successful! Redirecting to home page...');

        // Redirect to the QR page after the alert
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                {/* Logo Section */}
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPNtJNaHx0Nbt4iimh9buVGuAFe2Gnyu9iQ&s" alt="Ananta Logo" />
                </div>

                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="actions">
                        <button type="submit" className="login-button">Login</button>
                    </div>
                    <div className="signup-prompt">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
