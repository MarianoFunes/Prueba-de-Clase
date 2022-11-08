let path = require('path'); 

let indexController = {

    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },

};

module.exports = indexController;