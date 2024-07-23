// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

/* Autogenerated file. Do not edit manually. */

import { Direction } from "./../common.sol";

/**
 * @title IMyGameSystem
 * @author MUD (https://mud.dev) by Lattice (https://lattice.xyz)
 * @dev This interface is automatically generated from the corresponding system contract. Do not edit manually.
 */
interface IMyGameSystem {
  function app__generateCoins() external;

  function app__spawn(int32 x, int32 y) external;

  function app__move(Direction direction) external;
}
