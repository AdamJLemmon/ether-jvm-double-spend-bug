# Ethereum JVM Double Spend Bug
A known bug that exists within the JVM explained.  Bug is present when utilizing Remix(solidity browser) as well as testrpc.

# Bug Description
When invoking a payable contract method with a non-zero msg.value, if this method invokes a library method the resulting balance of the calling contract will be incremented by twice the amout of the ether sent.
For example, if the method is called with 10 ether the resulting balance of the contract will be 20 ether.

# Contents
This repo contains an absolutely bare bones implmentation to exploit the bug.  One contract, DoubleSpend, that invokes an empty library method, DoubleSpendLib.doubleSpend(), and thus double spends the ether sent.

DoubleSpend's doubleSpendEther method may be invoked with any amount of ether and the DoubleSpend contract's balance will be twice the ether sent.

# Test
Run the existing test to expose the bug.
```
$ truffle test
```
