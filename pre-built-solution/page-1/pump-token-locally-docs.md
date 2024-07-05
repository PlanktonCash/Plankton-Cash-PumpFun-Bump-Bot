# Pump Token Locally Docs

To get a transaction for signing locally and sending with a custom RPC, send a POST request to

[`https://plankton.cash/support`](https://t.me/planktoncashsupport\_bot)

Your request body must contain the following options:

* `mint`: The contract address of the token you want to trade (this is the text after the '/' in the pump.fun url for the token.)
* `publicKey`: Your wallet public key
* `amountInSol`: The amount of SOL or tokens to trade. If selling, amount can be a percentage of tokens in your wallet (ex. amount: "100%")
* `slippagePercent`: The percent slippage allowed
* `priorityFee`: Amount to use as priority fee

If your parameters are valid, you will receive a serialized transaction in response. See the examples below for how to send this transaction with Python (Solders) or JavaScript (Web3.js).



## Examples

```python
import { VersionedTransaction, Connection, Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const RPC_URL = "Your RPC Endpoint";
const connection = new Connection(RPC_URL, "confirmed");

async function sendPumpTransaction() {
  const response = await fetch(`http://api.plankton.cash`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mint: "Your-Token-Address", // Token address from pump.fun
      publicKey: "Your-wallet-public-key", // Your wallet public key
      amountInSol: 0.01, // Amount of SOL, (0.1 SOL)
      slippagePercent: 0.25, // Percent slippage allowed (25%)  
      priorityFee: 0.00001, // Priority fee (0.00001 SOl) - the lower priority fee, the lower chance to be taken by solana network
    }),
  });
  if (response.status === 200) {
    // Get Transaction information from our API.
    const data = await response.arrayBuffer();
    const tx = VersionedTransaction.deserialize(new Uint8Array(data));
    // Sing transaction with your Private key
    const keypair = Keypair.fromSecretKey(bs58.decode("your-private-key"));
    tx.sign([keypair]);
    // Send Transaction
    const signature = await connection.sendTransaction(tx);
    console.log("Transaction: https://solscan.io/tx/" + signature);
  } else {
    console.log(await response.json());
  }
}

sendPumpTransaction();
```

### Use pre-built solution

If you don't have coding skills, don't worry! Check out our pre-built solution \[here]\(github-link).

Please, read the README file and follow the steps to pump your token successfully. Do not hesitate to contact our support to help you with the setup.

