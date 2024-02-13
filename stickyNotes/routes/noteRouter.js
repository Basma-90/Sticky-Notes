const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.get('/', noteController.renderAddNote);
router.get('/add-note', noteController.renderAddNote);
router.post('/add-note', noteController.addNote);
router.get('/all-notes', noteController.renderAllNotes);



module.exports = router;