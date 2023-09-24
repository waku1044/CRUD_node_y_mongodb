const express = require('express');
const router = express.Router()

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eschemaUsuario = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuario', eschemaUsuario);

// crea la ruta para ahcer post en la base de datos
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      idusuario: req.body.idusuario
    });
  
    nuevoUsuario.save()
      .then(() => {
        res.send('Usuario agregado correctamente');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error al agregar el usuario');
      });
  });

// Definir ruta GET para obtener lista de usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find()
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error al obtener la lista de usuarios');
      });
  });

//definir ruta put pra actualizar usuario
  router.put('/actualizarusuario/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
  
    ModeloUsuario.findByIdAndUpdate(id, { nombre, email, telefono })
      .then(() => {
        res.send('Usuario actualizado correctamente');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
      });
  });


  
module.exports = router;



