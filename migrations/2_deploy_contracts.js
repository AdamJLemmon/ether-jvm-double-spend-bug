const DoubleSpendLib = artifacts.require("./DoubleSpendLib.sol");
const DoubleSpend = artifacts.require("./DoubleSpend.sol");

module.exports = function(deployer) {
  deployer.deploy(DoubleSpendLib);
  deployer.link(DoubleSpendLib, DoubleSpend);
  deployer.deploy(DoubleSpend);
};
