const express = require('express');
const { generatePassword } = require('../utils/passwordGenerator');
const router = express.Router();

// Ruta para generar contraseñas
router.post('/generate', (req, res) => {
    const { length = 12, includeNumbers = true, includeSymbols = true, includeUppercase = true, excludeSimilar = false } = req.body;
    const password = generatePassword(length, includeNumbers, includeSymbols, includeUppercase, excludeSimilar);
    res.json({ password });
});

router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'API en funcionamiento' });
});

module.exports = router;
