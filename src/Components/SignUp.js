import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        
        // Simulate signup logic
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Optionally show an alert or message
        alert('Sign up successful! Redirecting to login page...');
        
        // Redirect to the login page after signing up
        navigate('/');
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                {/* Logo Section */}
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPNtJNaHx0Nbt4iimh9buVGuAFe2Gnyu9iQ&s" alt="Ananta Logo" />
                </div>

                <h2>Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
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
                        <button type="submit" className="signup-button">Sign Up</button>
                    </div>
                    <div className="login-prompt">
                        <p>Already have an account? <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;