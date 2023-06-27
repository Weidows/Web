// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint public mintTokenNumber;
    uint public mintPrice;

    constructor(
        uint _mintTokenNumber,
        uint _mintPrice
    ) ERC20("MyToken", "MTK") {
        mintTokenNumber = _mintTokenNumber;
        mintPrice = _mintPrice;
    }

    function mint(address _to) external payable {
        require((msg.value >= mintPrice), "Insufficient funds");
        _mint(_to, mintTokenNumber);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
