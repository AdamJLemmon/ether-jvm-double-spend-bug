pragma solidity ^0.4.11;

import './DoubleSpendLib.sol';

contract DoubleSpend {
  function doubleSpendEther() public payable {
    DoubleSpendLib.doubleSpend();
  }
}
