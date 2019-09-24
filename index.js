var contract = require("truffle-contract");
var Registry = require("./lib/registry.js");
var Web3 = require("conflux-web");

var EPMRegistry = {
  use: function(address, from_address, provider) {
    return new Registry(address, from_address, provider);
  }
};

module.exports = EPMRegistry;
