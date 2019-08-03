'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    first_name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    last_name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    phone_number: {
      type: String,
      default: ''
    }
});

module.exports = mongoose.model('Clients', ClientSchema);