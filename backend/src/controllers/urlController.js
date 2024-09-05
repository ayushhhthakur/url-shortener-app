const shortid = require('shortid');
const Url = require('../models/Url');

// @desc    Create short URL// @desc    Create short URL
exports.createShortUrl = async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.BASE_URL;

    const urlCode = shortid.generate();
    const shortUrl = `${baseUrl}/${urlCode}`;

    try {
        const newUrl = await Url.create({ longUrl, shortUrl, urlCode });
        res.status(201).json(newUrl);
    } catch (err) {
        console.error('Error creating short URL:', err);
        res.status(500).json('Server error');
    }
};


// @desc    Redirect to long/original URL
exports.redirectUrl = async (req, res) => {
    const { code } = req.params;

    try {
        const url = await Url.findOne({ urlCode: code });

        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL found');
        }
    } catch (err) {
        console.error('Error redirecting URL:', err);
        res.status(500).json('Server error');
    }
};
