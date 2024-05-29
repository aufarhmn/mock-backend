const router = require('express').Router();

const { getAllData, getDataById, createData } = require('../controllers/index');

router.get('/', getAllData);
router.get('/:id', getDataById);
router.post('/', createData);

module.exports = router;