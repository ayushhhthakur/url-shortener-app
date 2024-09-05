import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';

const Home = () => {
    const [urls, setUrls] = useState([]);

    const addUrl = (newUrl) => {
        setUrls([newUrl, ...urls]);
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <UrlForm addUrl={addUrl} />
            <UrlList urls={urls} />
        </div>
    );
};

export default Home;
