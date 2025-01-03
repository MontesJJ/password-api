const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', passwordRoutes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
