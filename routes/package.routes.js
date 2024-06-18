module.exports = app => {
  const packages = require('../controllers/package.controller.js');
  const router = require('express').Router();

  router.post('/', packages.create);
  router.get('/', packages.findAll);
  router.get('/:id', packages.findOne);
  router.put('/:id', packages.update);
  router.delete('/:id', packages.delete);

  app.use('/api/packages', router);
};
