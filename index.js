import { RPC_URL, PRIVATE_KEY, PUBLIC_KEY, TOKEN_ADDRESS } from "./consts.js";
import { VersionedTransaction, Connection, Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const connection = new Connection(RPC_URL, "confirmed");
const keypair = Keypair.fromSecretKey(bs58.decode(PRIVATE_KEY));

async function sendPumpTransaction() {
  const response = await fetch(`http://api.plankton.cash`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mint: TOKEN_ADDRESS, // Token address from pump.fun
      publicKey: PUBLIC_KEY, // Your wallet public key
      amountInSol: 0.01, // Amount of SOL, (0.1 SOL)
      slippagePercent: 0.25, // Percent slippage allowed (25%)
      priorityFee: 0.00001, // Priority fee (0.00001 SOl) - the lower priority fee, the lower chance to be taken by solana network
    }),
  });
  if (response.status === 200) {
    const data = await response.arrayBuffer();
    const tx = VersionedTransaction.deserialize(new Uint8Array(data));

    tx.sign([keypair]);
    const signature = await connection.sendTransaction(tx);
    console.log("Transaction: https://solscan.io/tx/" + signature);
  } else {
    console.log(await response.json());
  }
}

async function main() {
  while (true) {
    try {
      await sendPumpTransaction();
    } catch (e) {
      console.error(`An error occurred: ${e}`);
    }
    await new Promise((r) => setTimeout(r, 1000)); // sleep for 1 second
  }
}

main();
