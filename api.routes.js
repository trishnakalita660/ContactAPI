// gonna define all the api end points here

let router= require('express').Router();

router.get('/', function (req,res){
    res.json({
        status: 'API is working',
        message: 'welcome'

    });
});

var contactController = require('./contactController');

router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

router.route('/contacts/:contact_id')
.get(contactController.index)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete);


module.exports = router;

 