'use strict';

var mongoose = require('mongoose'), Client = mongoose.model('Clients');

exports.list_all_clients = (req, res) => {
    Client.find({}, function(err, client_list) {
        if (err)
            res.send(err);
        res.json(client_list);
    });
};

exports.create_a_client = (req, res) => {
    var new_client = new Client(req.body);
    new_client.save((err, client) => {
        if (err)
            res.send(err);
        res.json(client);
    });
};


exports.read_a_client = (req, res) => {
    Client.findById(req.params.id, (err, client) => {
        if (err)
            res.send(err);
        res.json(client);
    });
};

exports.update_a_client = (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, client) => {
        if (err)
            res.send(err);
        res.json(client);
    });
};

exports.delete_a_client = (req, res) => {
    Client.deleteOne({
        _id: req.params.id
    }, function(err, client) {
        if (err)
            res.send(err);
        res.json({ message: 'Client successfully deleted' });
    });
};