const DoubleSpend = artifacts.require("./DoubleSpend.sol");
const amountToDeposit = 100;

contract('DoubleSpend', accounts => {
  it("should double speng the ether deposited, balance = msg.value * 2",
  async () => {
      const doubleSpend = await DoubleSpend.deployed();

      console.log("Inital Balance: " + web3.eth.getBalance(doubleSpend.address).toNumber());
      console.log('Deposit: ' + amountToDeposit);

      const response = await doubleSpend.doubleSpendEther({ value: amountToDeposit });

      console.log("Balance After deposit: " + web3.eth.getBalance(doubleSpend.address).toNumber());

      assert(web3.eth.getBalance(doubleSpend.address).toNumber() === amountToDeposit * 2, "Incorrect deposit amount set in contract");
  });
});
