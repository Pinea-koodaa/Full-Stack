const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// MongoDB Atlas -klusteri
mongoose.connect(process.env.MONGODB_URI);

// Mongoose-malli
const musicSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Music = mongoose.model('Music', musicSchema);

// reitit
app.get('/api/getall', async (req, res) => {
    try {
        const music = await Music.find();
        res.json(music);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/:id', async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        if (!music) return res.status(404).json({ message: 'Not found' });
        res.json(music);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/add', async (req, res) => {
    console.log('POST /api/add called');
    const music = new Music(req.body);
    try {
        const newMusic = await music.save();
        res.status(201).json(newMusic);
    } catch (error) {
        console.error('Error saving music:', error);
        res.status(400).json({ message: error.message });
    }
});


app.put('/api/update/:id', async (req, res) => {
    try {
        const music = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!music) return res.status(404).json({ message: 'Not found' });
        res.json(music);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/api/delete/:id', async (req, res) => {
    try {
        const music = await Music.findByIdAndDelete(req.params.id);
        if (!music) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Virheenkäsittelymiddleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});


// palvelin
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});