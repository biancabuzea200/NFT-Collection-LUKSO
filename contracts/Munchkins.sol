// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// modules
import {LSP8Mintable} from "@lukso/lsp8-contracts/contracts/presets/LSP8Mintable.sol";

// constnats
import {_LSP8_TOKENID_FORMAT_NUMBER} from "@lukso/lsp8-contracts/contracts/LSP8Constants.sol";
import {_LSP4_TOKEN_TYPE_NFT} from "@lukso/lsp4-contracts/contracts/LSP4Constants.sol";

contract Munchkins is LSP8Mintable {
    constructor(
        string memory name,
        string memory ticker,
        address newOwner
    )
        LSP8Mintable(
            name,
            ticker,
            newOwner,
            _LSP4_TOKEN_TYPE_NFT,
            _LSP8_TOKENID_FORMAT_NUMBER
        )
    {}

    // Any other desirable functions
    // https://wallet.universalprofile.cloud/asset/0x0aFD5980A261b71399Be95EAb9Fbf94e2f63245d/tokenId/0x0000000000000000000000000000000000000000000000000000000000000001
}
