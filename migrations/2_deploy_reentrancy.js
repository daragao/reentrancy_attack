const Reentrance = artifacts.require("Reentrance");
const Attacker = artifacts.require("Attacker");

module.exports = async function(deployer) {
  const reentrance = await deployer.deploy(Reentrance);
  const attacker = await deployer.deploy(Attacker);
};
