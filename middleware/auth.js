const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Token aus dem Header auslesen
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'Kein Token, Zugriff verweigert.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id; // User-ID für die nächste Funktion speichern
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token ist nicht gültig.' });
    }
};