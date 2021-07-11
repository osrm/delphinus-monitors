export enum Verifier {
    Withdraw = 0,
    Deposit = 1,
    PoolOps = 2,
    Swap = 3,
}

export enum L2Ops {
    Withdraw = "WithdrawReq",
    Deposit = "Deposit",
    Swap = "SwapReq",
    PoolSupply = "PoolSupplyReq",
    PoolRetrieve = "PoolRetrieve",
}