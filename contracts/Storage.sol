// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    mapping(bytes32 => string) private data;

    function store(string memory v) public returns (bytes32) {
        bytes32 k = keccak256(abi.encodePacked(v));
        data[k] = v;
        return k;
    }

    function getValue(bytes32 k) public view returns (string memory) {
        return data[k];
    }
}
