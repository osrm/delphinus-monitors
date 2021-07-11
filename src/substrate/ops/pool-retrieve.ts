import BN from "bn.js";
import { dataToBN, handlePoolOpsReq } from "./common";

export async function handlePoolRetrievePendingOps(
  rid: string,
  asPoolRetrieve: any[]
) {
  let cursor = 0;
  const account = asPoolRetrieve[cursor++].toString();
  const from = new BN(asPoolRetrieve[cursor++].toString());
  const to = new BN(asPoolRetrieve[cursor++].toString());
  const amount_from = new BN(asPoolRetrieve[cursor++].toString());
  const amount_to = new BN(asPoolRetrieve[cursor++].toString());
  const nonce = new BN(asPoolRetrieve[cursor++].toString());
  const pool_amount_from = new BN(asPoolRetrieve[cursor++].toString());
  const pool_amount_to = new BN(asPoolRetrieve[cursor++].toString());
  const account_amount_from = new BN(asPoolRetrieve[cursor++].toString());
  const account_amount_to = new BN(asPoolRetrieve[cursor++].toString());
  const share = new BN(asPoolRetrieve[cursor++].toString());

  await handlePoolOpsReq(
    rid,
    account,
    from,
    to,
    amount_from,
    amount_to,
    nonce,
    pool_amount_from,
    pool_amount_to,
    account_amount_from,
    account_amount_to,
    share
  );
}

export async function handlePoolRetrieveEvent(data: any[]) {
  let cursor = 0;
  const rid = dataToBN(data[cursor++]).toString();
  const account = data[cursor++].toString();
  const from = dataToBN(data[cursor++]);
  const to = dataToBN(data[cursor++]);
  const amount_from = dataToBN(data[cursor++]);
  const amount_to = dataToBN(data[cursor++]);
  const nonce = dataToBN(data[cursor++]);
  const pool_amount_from = dataToBN(data[cursor++]);
  const pool_amount_to = dataToBN(data[cursor++]);
  const account_amount_from = dataToBN(data[cursor++]);
  const account_amount_to = dataToBN(data[cursor++]);
  const share = dataToBN(data[cursor++]);

  await handlePoolOpsReq(
    rid,
    account,
    from,
    to,
    amount_from,
    amount_to,
    nonce,
    pool_amount_from,
    pool_amount_to,
    account_amount_from,
    account_amount_to,
    share
  );
}