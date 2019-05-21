const express = require('express');

const router = express.Router();
const ClientHandler = require('../handlers/clientHandler');

router.get('/test', (request, response) => response.send('Im alive!!'));

router.post('/client', ClientHandler.postClient);

module.exports = router;
