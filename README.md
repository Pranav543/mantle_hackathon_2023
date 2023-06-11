
# Tsunami
_Monorepo for Tsunami protocol._

Tsunami is a private token streaming protocol for streaming tokens on per-second basis privately.

Tsunami Contracts:

- Mantle Testnet - [0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9](https://explorer.testnet.mantle.xyz/address/0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9)

- Goerli - [0xaDA850FF986679ca7D00c931b9Fd63B876B1c9A0](https://goerli.etherscan.io/address/0xaDA850FF986679ca7D00c931b9Fd63B876B1c9A0)

## About
Tsunami utilizes the idea of a Stream as a UTXO Note which can be spent by either the stream Sender or the stream Receiver. But both parties are constrained to what parameters they can change in newly created UTXO after spending (and nullifying) the first one.

Tsunami uses zkSNARK verifiers which allows users to prove legitimacy of their intentions regarding spending a existing UTXO note.

Tsunami can be used by parties like individuals or DAOs to fund teams or projects they want to support while keeping any information about identity or even stream parameters (e.g. start/stop times of stream, rate of stream etc.) anonymized - which might be desirable in many situations like supporting some good cause. A Sender can also generate revoke proofs to stop stream early - in case funds are not used properly by Receiver party.

Tsunami stores encrypted stream UTXO notes as emitted events which can be decrypted by a shared secret key computed from any of the party's (sender/receiver) shielded private key & other party's (sender/receiver) shielded address/public key.

## Installation

1. Install all the dependancies
```
yarn install
```
2. Build Utility package dependency
```
cd packages/utils
```

```
yarn build
```
3. Go to root again and run below command

```
yarn dev
```
Note: Don't forget to set the environment variables properly



