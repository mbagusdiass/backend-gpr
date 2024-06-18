module.exports = app => {
    const ekspedisi = require('../controllers/ekspedisi.controller.js');
    const router = require('express').Router();
  
    router.post('/', ekspedisi.create);
    router.get('/', ekspedisi.findAll);
  
    app.use('/api/ekspedisi', router);
  };
  