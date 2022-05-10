// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    mapping(bytes32 => string) public data;
    bytes32[] public keys;

    function store(string memory v) public returns (bytes32) {
        bytes32 k = keccak256(abi.encodePacked(v));
        if (k != keccak256(abi.encodePacked(data[k]))) {
            keys.push(k);
            data[k] = v;
        }
        return k;
    }

    function giveKeys() public view returns (bytes32[] memory) {
        return keys;
    }
}
