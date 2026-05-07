import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your actual Render URL
            const API_URL = "https://blogpost-api-cb1b.onrender.com/api/login"; 
            
            const response = await axios.post(API_URL, { email, password });
            
            setMessage("Login Successful!");
            console.log(response.data);
            // Save token or redirect user here
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        style={styles.input}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Sign In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

const styles = {
    input: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Login;