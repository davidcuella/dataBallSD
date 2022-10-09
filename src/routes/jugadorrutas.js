const router = require('express').Router();

const jugadorController = require('../controllers/jugadorController');

router.get('/', jugadorController.list);
router.post('/add', jugadorController.save);
router.get('/update/:id', jugadorController.edit);
router.post('/update/:id', jugadorController.update);
router.get('/delete/:id', jugadorController.delete);

module.exports = router;
