# Project Title

This is the pump.fun bot provided by plankton.cash platform.

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Description

Bot is specifically designed to work with the plankton.cash provided API and helps you to pump your selected token.
Our solution is better than most of the solutions on the market for pump.fun token pumping, as we are providing you with the possibility to trade transactions locally, making it the most safe!

In addition, we take the lowest fee in the market of 0.4%.

Besides that, our solution is designed to do the buy and sell actions in the same transaction to increase efficiency and ensure that most of the transactions would be processed by Solana network.

## Installation

1. Open terminal or cmd

   For Windows: press "Windows Key + R", type "cmd", press "Enter".

   For Mac: press "Command + Space" , type 'Terminal', press "Enter".

2. Check if the nodeJs installed on your computer

   Write nvm -v

   If nothing happens, you need to install an nvm

3. (install NVM) If you need to install nvm do the following:

you need to install nodejs :

For Windows : https://nodejs.org/dist/v22.2.0/node-v22.2.0-x64.msi

For MacOS : https://nodejs.org/dist/v22.2.0/node-v22.2.0.pkg

For Linux, execute in a terminal :

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

nvm install 22
```

To check if nodejs is installed :

- on Windows, open a cmd.exe, and run the command :

```
node -v
```

- On MacOs & linux, open a terminal, and run the same command :

```
node -v
```

It should return the version of nodejs.

4. Next, you should install dependencies

   In a cmd.exe or a terminal, go to the folder of the pump-fun-bump-bot with the command :

   ```
   cd /path/to/the/folder
   ```

   Then, in your cmd.exe / terminal, start the command :

   ```
   npm install
   ```

   It should install all the dependencies in a new folder named "node_modules".

5. If you have git installed on your computer you can fetch the content of this repository with the command :

   ```
   git clone 'OUR GITHUB URL'
   ```

   Else, you can download the repository in a zip here : "OUR GITHUB URL"

6. Setup configuration

   Navigate to consts.js file and change information to your needs.

## Usage

You have four things to setup in consts.js file:

- The RPC endpoint to connect you to the Solana blockchain (Quicknode or Helius provide good free RPC endpoints)

- The private key of the wallet who will buy and sell

- The contract address of the token you want to bump

The variables are on the top of the script :

```
export const RPC_URL = ""; // Quicknode or Helius give good rpc urls
export const PRIVKEY = ""; // the private key of the account who will buy and sell
export const TOKEN_ADDR = ""; // Put the address of the token you want to bump here
export const PUBLIC_KEY = ""; // Public key is going to be used for the transaction
```

7. Run the bot

   ## Run the bump bot

   To run the bump bot, in a cmd.exe or a terminal, start the command:

   ```
   node index.js
   ```

And it's all. The bot will buy 4 times, then sell all the balance.

## Adjustments

If you want to make a shorter/longer period between transactions, you can change the waiting time in :

    await new Promise((r) => setTimeout(r, 2000)); // it's in milliseconds

by simple changing '2000' to any time you want (in milliseconds equivalent).

## Contact

If you want to collaborate with plankton.cash platform or have any questions, please do not hesitate to contact us!

Happy bumping!
