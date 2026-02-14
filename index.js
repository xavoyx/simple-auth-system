require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

// 1. App initialisieren (Das hat oben gefehlt!)
const app = express();

// 2. Middleware (Datenverarbeitung & Statische Dateien)
app.use(express.json());
app.use(express.static('public')); // Jetzt weiß Node, was 'app' ist!

// 3. Datenbank-Verbindung
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB verbunden'))
    .catch(err => console.error('❌ Verbindungsfehler:', err));

// 4. Routen
app.use('/api/auth', authRoutes);

// 5. Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});