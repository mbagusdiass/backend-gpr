const db = require('../models');
const Ekspedisi = db.Ekspedisi;

exports.create = async (req, res) => {
  try {
    const ekspedisi = await Ekspedisi.create(req.body);
    res.json(ekspedisi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const ekspedisi = await Ekspedisi.findAll();
    res.json(ekspedisi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Ekspedisi.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Ekspedisi deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};