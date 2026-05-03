// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract VaultraExecutor is Ownable {

    event Executed(
        address indexed user,
        string action,
        uint256 timestamp
    );

    constructor() Ownable(msg.sender) {}

    receive() external payable {}

    function executeAction(string memory action) external onlyOwner {
        emit Executed(msg.sender, action, block.timestamp);
    }

    function withdraw(address payable to, uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient funds");
        to.transfer(amount);
    }
}