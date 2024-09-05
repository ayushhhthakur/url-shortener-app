import React from 'react';

const UrlList = ({ urls }) => (
    <ul>
        {urls.map(url => (
            <li key={url._id}>
                <a href={url.shortUrl}>{url.shortUrl}</a> - {url.longUrl}
            </li>
        ))}
    </ul>
);

export default UrlList;
