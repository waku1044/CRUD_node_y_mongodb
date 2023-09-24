const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetdb = mongoose.connection

objetdb.on('connected',()=>{console.log('Conexión correcta a MongoDB')})
objetdb.on('error',()=>{console.log('Error en la conexión de MongoDB')})

module.exports = mongoose