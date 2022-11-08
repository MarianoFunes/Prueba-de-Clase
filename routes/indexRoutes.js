let express = require('express'); 
let indexController = require('../controllers/indexControl.js')

let router = express.Router(); 



router.get( '/', indexController.index); 

module.exports = router; 