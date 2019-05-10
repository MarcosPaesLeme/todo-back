const moongose = require('mongoose');
moongose.Promise = global.Promise;

module.exports = moongose.connect('mongodb://marcos:marcos123@ds149056.mlab.com:49056/todo')