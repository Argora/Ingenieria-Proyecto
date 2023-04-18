const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');

//api/usuarios

router.get('/datosMunicipios', usuariosController.getDeptosMunicipios);
router.post('/registro', usuariosController.registrarUsuario);
router.post('/confirmarUsuario', usuariosController.confirmarUsuario);
router.post('/logIn', usuariosController.LoginUsuario);
router.post('/token', usuariosController.verificarTiempoToken);
router.get('/perfilUsuario/:id', usuariosController.perfilUsuario);
router.get('/suscripciones/:id', usuariosController.suscripcionesCliente);
router.post('/cancelarSuscripcion', usuariosController.cancelarSuscripcion);
router.post('/suscribirCategoria', usuariosController.suscribirCategoria);

module.exports = router