const mongoose = require("mongoose");

const { urlDb, serviceName } = require("../config");

mongoose.connect(urlDb, {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;
