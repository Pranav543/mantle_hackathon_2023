
# Tsunami
_Monorepo for Tsunami protocol._

Tsunami is a private token streaming protocol for streaming tokens on per-second basis privately.

Tsunami Contracts:

- Mantle Testnet 
- - Registrar- [0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74](https://explorer.testnet.mantle.xyz/address/0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74)
- - Tsunami Protocol- [0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9](https://explorer.testnet.mantle.xyz/address/0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9)
- - hasher- [0x6e71b436C416ea169A0efB50Af5bB805b2Ca64ef](https://explorer.testnet.mantle.xyz/address/0x6e71b436C416ea169A0efB50Af5bB805b2Ca64ef)
- - ProposalVerifier- [0xB2A663e9d48D2f963e6035E8DAffaE94D2b03bDA](https://explorer.testnet.mantle.xyz/address/0xB2A663e9d48D2f963e6035E8DAffaE94D2b03bDA)
- - WithdrawVerifier- [0xCfd4Ed36A7455E8aEC65F2d8bf56342126362Fe3](https://explorer.testnet.mantle.xyz/address/0xCfd4Ed36A7455E8aEC65F2d8bf56342126362Fe3)
- - RevokeVerifier- [0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d](https://explorer.testnet.mantle.xyz/address/0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d)

- Goerli - 
- - Registrar- [0x7B5D4B88B5548D9d3d32E0216eF47C7aE54edc27](https://goerli.etherscan.io/address/0x7B5D4B88B5548D9d3d32E0216eF47C7aE54edc27)
- - Tsunami Protocol- [0xaDA850FF986679ca7D00c931b9Fd63B876B1c9A0](https://goerli.etherscan.io/address/0xaDA850FF986679ca7D00c931b9Fd63B876B1c9A0)
- - hasher- [0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d](https://goerli.etherscan.io/address/0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d)
- - ProposalVerifier- [0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74](https://goerli.etherscan.io/address/0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74)
- - WithdrawVerifier- [0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9](https://goerli.etherscan.io/address/0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9)
- - RevokeVerifier- [0x4514005bB4c05df679374307D987917bcaE1CC97](https://goerli.etherscan.io/address/0x4514005bB4c05df679374307D987917bcaE1CC97)

## About
Tsunami utilizes the idea of a Stream as a UTXO Note which can be spent by either the stream Sender or the stream Receiver. But both parties are constrained to what parameters they can change in newly created UTXO after spending (and nullifying) the first one.

Tsunami uses zkSNARK verifiers which allows users to prove legitimacy of their intentions regarding spending a existing UTXO note.

Tsunami can be used by parties like individuals or DAOs to fund teams or projects they want to support while keeping any information about identity or even stream parameters (e.g. start/stop times of stream, rate of stream etc.) anonymized - which might be desirable in many situations like supporting some good cause. A Sender can also generate revoke proofs to stop stream early - in case funds are not used properly by Receiver party.

Tsunami stores encrypted stream UTXO notes as emitted events which can be decrypted by a shared secret key computed from any of the party's (sender/receiver) shielded private key & other party's (sender/receiver) shielded address/public key.

## What Problems Tsunami Protocol Solves
Token streaming on a per-second basis, such as for payroll or grants, has already gained traction and demonstrated its usefulness. For instance, let's consider a DAO funding a project while gradually releasing the promised grant amount over time as a stream. By utilizing a stream, the DAO can halt the flow of funds if there are any instances of misuse. However, due to increasing concerns about privacy on public blockchains and unfriendly regulations, not every DAO may be inclined to publicly stream funds to a project. Some DAOs may have reservations about the funded team, even if the team is working on a public good. However, this doesn't imply that the DAO or any other party is unwilling to provide funding.

Tsunami enables DAOs or any other entities to initiate a private stream to another party. In addition to anonymizing both the sender and receiver, Tsunami ensures that stream parameters, such as the stream rate and start/stop times, remain confidential between the sender and receiver. Preserving the privacy of the sender DAO and the recipient team allows for the flourishing of innovations, particularly in the realm of privacy technology, without constant concerns about disruptive implications that could impede progress.

## Challenges
Some major hurdles were:

1. Coming up with a logic/design that preserves privacy with token streaming as there's nothing like it yet currently. We came up with a approach which we call - Stream as a UTXO - where each stream is a UTXO in a Merkle tree. Only two parties - sender or receiver - can spend this UTXO to create a new one. But each party is restricted to what they can change in newly created UTXO (e.g. receiver can change checkpoint time of last withdraw).
2. zkSNARK tooling is not very mature yet - so debugging errors related to Circom circuits are hard. It required some manual debugging to dig into spot where errors originated in the circuit.
3. Unlike other UTXO based apps - a stream UTXO should be able to spent by two parties - either Sender or Receiver. So to decrypt the encrypted notes (UTXOs) a shared secret key is calculated with one party's shielded private key & other's shielded address or public key. So that both parties can decrypt the encrypted note & use it to spend it conveniently.

## Creating a Private Stream:
![Screenshot 2023-06-11 at 2 23 14 PM](https://github.com/Pranav543/mantle_hackathon_2023/assets/64905367/4ccf5502-62d8-4ffc-a1d5-8deaa56a2d4c)


## Withdrawing From a Private Stream
![Screenshot 2023-06-11 at 2 23 14 PM](https://github.com/Pranav543/mantle_hackathon_2023/assets/64905367/d920f9fd-9275-4197-91cf-95e2d0e285b4)

## Revoking a Private Stream
![Screenshot 2023-06-11 at 2 07 23 PM](https://github.com/Pranav543/mantle_hackathon_2023/assets/64905367/b525daa8-7ce2-4641-9a6f-b6d7e4014918)

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



