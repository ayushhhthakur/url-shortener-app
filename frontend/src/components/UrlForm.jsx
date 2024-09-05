import React, { useState } from 'react';
import axios from 'axios';

// Regular expression for URL validation
const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Validate the URL
        if (!isValidUrl(longUrl)) {
            setError('Please enter a valid URL.');
            return;
        }

        try {
            // Send a POST request to shorten the URL
            const response = await axios.post('http://localhost:5000/api/shorten', { longUrl });
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            setError('Error shortening the URL. Please try again.');
            console.error('Error shortening the URL:', error);
        }
    };

    // Inline CSS styles
    const formContainerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    const labelStyle = {
        fontSize: '16px',
        marginBottom: '8px',
        color: '#333'
    };

    const inputStyle = {
        padding: '10px',
        marginBottom: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer'
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#0056b3'
    };

    const shortUrlStyle = {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f1f1f1',
        fontSize: '16px',
        wordBreak: 'break-all'
    };

    const errorStyle = {
        color: 'red',
        marginTop: '10px'
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label htmlFor="longUrl" style={labelStyle}>Long URL:</label>
                <input
                    type="text"
                    id="longUrl"
                    name="longUrl"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                    style={inputStyle}
                />
                <button 
                    type="submit" 
                    style={buttonStyle} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Shorten URL
                </button>
                {shortUrl && (
                    <div style={shortUrlStyle}>
                        <strong>Shortened URL:</strong> <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                    </div>
                )}
                {error && (
                    <div style={errorStyle}>
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default UrlForm;
