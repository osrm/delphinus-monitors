//https://github.com/DelphinusLab/zkc-substrate-node/blob/main/pallets/swap/src/lib.rs
// The args and event data is from the pallets/swap/src/lib.rs

export interface BaseEvent {
  //This data is emitted for all successful extrinsics
  reqId: number;
  sig1: string; // user signature
  sig2: string;
  sig3: string;
  nonce: number;
  accountIndex: number; // user account index
}
/* SetKey args */
export interface SetKeyArgs {
  key: string;
}
export interface SetKeyEvent extends BaseEvent {
  reserved: string;
  x: string;
  y: string;
}
/* Deposit function inputs and output data */
export interface DepositArgs {
  signature: string;
  accountIndex: number;
  tokenIndex: number;
  amount: string;
  l1_tx_hash: string;
  nonce: number;
}

export interface DepositEvent extends BaseEvent {
  tokenIndex: string;
  amount: string;
  reserveU256: number;
  relayer: number; // relayer account index
}
/* Withdraw function inputs and output data */
export interface WithdrawArgs {
  signature: string;
  tokenIndex: string;
  amount: string;
  l1Account: string; // L1 address
  nonce: string;
}
//TODO: Need to record L1 transaction hash
export interface WithdrawEvent extends BaseEvent {
  tokenIndex: number;
  amount: string;
  l1Account: string; // L1 address withdrawn to
}
/* Swap function inputs and output data */
export interface SwapArgs {
  signature: string;
  poolIndex: number;
  reverse: number;
  amount: string;
  nonce: number;
}

export interface SwapEvent extends BaseEvent {
  poolIndex: number;
  reverse: number;
  amount: string;
}

/* PoolSupply function inputs and output data */
export interface SupplyArgs {
  signature: string;
  poolIndex: number;
  amount0: string;
  amount1: string;
  nonce: number;
}

export interface SupplyEvent extends BaseEvent {
  poolIndex: number;
  amount0: string;
  amount1: string;
}
/* Currently retrieve is same as supply args, maybe can place into one type */
export interface RetrieveArgs {
  signature: string;
  poolIndex: number;
  amount0: string;
  amount1: string;
  nonce: number;
}

export interface RetrieveEvent extends BaseEvent {
  poolIndex: number;
  amount0: string;
  amount1: string;
}

/* AddPool args */
export interface AddPoolArgs {
  signature: string;
  tokenIndex0: number;
  tokenIndex1: number;
  nonce: number;
}

export interface AddPoolEvent extends Omit<BaseEvent, "accountIndex"> {
  reqId: number;
  sig1: string;
  sig2: string;
  sig3: string;
  nonce: number;
  tokenIndex0: number;
  tokenIndex1: number;
  reserve0: string;
  poolIndex: number;
  sender: number; //account which added the pool
}

/* Ack args */
export interface AckArgs {
  reqIdStart: number;
}

export interface AckEvent {
  reqIdStart: number;
  ackBits: Uint8Array;
}
