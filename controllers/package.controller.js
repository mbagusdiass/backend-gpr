const db = require('../models');
const Package = db.Package;
const Ekspedisi = db.Ekspedisi;
const { Op } = require('sequelize');

exports.create = async (req, res) => {
  try {
    const package = await Package.create(req.body);
    res.json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const packages = await Package.findAll({ include: Ekspedisi });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const package = await Package.findByPk(req.params.id, { include: Ekspedisi });
    res.json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const package = await Package.update(req.body, {
      where: { id: req.params.id }
    });
    res.json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Package.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Package deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReport = async (req, res) => {
  const { ekspedisiId, startDate, endDate } = req.query;

  try {
    const report = await db.Package.findAll({
      where: {
        ekspedisiId: ekspedisiId,
        createdAt: {
          [Op.between]: [new Date(startDate), new Date(endDate)]
        }
      },
      include: db.Ekspedisi
    });

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
