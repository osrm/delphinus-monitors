const Web3 = require("web3");
const FileSys = require("fs");
const EthSubscriber = require("web3subscriber/syncdb");
const EthConfig = require('solidity/clients/config.js');
const substrateNode = require('../../config/substrate-node.json');
const substrateClient = require('../substrate/client');
const bridge = require('solidity/clients/bridge/bridge.js');
const l2address = require('./l2address');
const BigNumber = Web3.utils.BN;
const event_queue = require('../substrate/event-queue');
const RioTokenInfo = require("solidity/build/contracts/Rio.json");

let config = EthConfig[process.argv[2]];
console.log("config:", config);

const BridgeJSON = require(config.contracts + "/Bridge.json");

let etracker = new EthSubscriber.EventTracker(config.device_id, BridgeJSON, config, async (n,v,hash) => {});

etracker.subscribe_pending_events().then(v => {
  console.log("start subscribe pending events:");
});
