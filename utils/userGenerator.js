const generateUser = () => {

    const fs = require('fs');
    const path = require('path');
    
    const cargarRecursos = () => {
        const filePath = path.join(__dirname, '../recursos.json');
        const data = fs.readFileSync(filePath, 'utf8'); 
        return JSON.parse(data); 
    };

    const recursos = cargarRecursos();
    const randomName = Math.floor(Math.random() * recursos.nombres.length);
    const randomAdjetive = Math.floor(Math.random() * recursos.adjetivos.length);
    const randomNumber = Math.floor(Math.random() * recursos.adjetivos.length);
    return (recursos.nombres[randomName] + "_" + recursos.adjetivos[randomAdjetive] + "_" + randomNumber);

};

module.exports = { generateUser };
