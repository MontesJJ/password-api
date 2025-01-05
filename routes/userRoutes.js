const express = require('express');
const { generateUser } = require('../utils/userGenerator');
const router = express.Router();

//Ruta para generar usuarios
router.post('/generate-user', (req, res) => {
    const user = generateUser();
    res.json({ user })
});

router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'API en funcionamiento' });
});

module.exports = router;