const ethers = require("ethers");

export function convertDateToTimestamp(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}
