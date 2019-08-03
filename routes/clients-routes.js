'use strict';
module.exports = function(app) {
    var clientCtrl = require('../controllers/clients-controller');
  
    // clientCtrl Routes
    app.route('/api/client/new').post(clientCtrl.create_a_client)
    app.route('/api/client/all').get(clientCtrl.list_all_clients)
    app.route('/api/client/delete/:id').delete(clientCtrl.delete_a_client)
    app.route('/api/client/update/:id').put(clientCtrl.update_a_client)
    app.route('/api/client/get/:id').get(clientCtrl.read_a_client)
};