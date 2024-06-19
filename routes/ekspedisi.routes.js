module.exports = app => {
    const ekspedisi = require('../controllers/ekspedisi.controller.js');
    const router = require('express').Router();
  
    router.post('/', ekspedisi.create);
    router.get('/', ekspedisi.findAll);
    router.delete('/:id', ekspedisi.delete);
  
    app.use('/api/ekspedisi', router);
  };
  