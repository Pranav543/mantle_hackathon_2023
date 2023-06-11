import { ethers } from 'hardhat';
import { deployHasher } from './hasher';
const { utils, providers, Wallet } = ethers;

const rpcUrl = process.env.RPC_MANTLE_TESTNET as string;
const privateKeys = (process.env.PRIVATE_KEYS_TEST as string).split(',');
const provider = new providers.JsonRpcProvider(rpcUrl);
const wallet = new Wallet(privateKeys[0], provider);
const maxDepositAmt = utils.parseEther('10');

const treeHeight = 20;
const bitAddress = '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111';
const hasherAddress = '0x6e71b436C416ea169A0efB50Af5bB805b2Ca64ef';
const proposalVerifierAddress = '0xB2A663e9d48D2f963e6035E8DAffaE94D2b03bDA';
const withdrawVerifierAddress = '0xCfd4Ed36A7455E8aEC65F2d8bf56342126362Fe3';
const revokeVerifierAddress = '0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d';
const registrarAddress = '0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74';

export async function deployContract(contractName: string, ...args: any[]) {
  const Factory = await ethers.getContractFactory(contractName);
  const instance = await Factory.connect(wallet).deploy(...args);
  return instance.deployed();
}

async function main() {
    // const hasher = await deployHasher(wallet);
    // console.log('hasher', hasher.address);

    // const proposalVerifier = await deployContract(
    //   'contracts/verifiers/ProposalVerifier.sol:Verifier',
    // );
    // console.log('ProposalVerifier:', proposalVerifier.address);
    // const withdrawVerifier = await deployContract(
    //   'contracts/verifiers/WithdrawVerifier.sol:Verifier',
    // );
    // console.log('WithdrawVerifier:', withdrawVerifier.address);
    // const revokeVerifier = await deployContract('contracts/verifiers/RevokeVerifier.sol:Verifier');
    // console.log('RevokeVerifier:', revokeVerifier.address);
    // const registrar = await deployContract('Registrar');
    // console.log('Registrar:', registrar.address);
  const tsunami = await deployContract(
    'Tsunami',
    treeHeight,
    maxDepositAmt,
    hasherAddress,
    bitAddress,
    proposalVerifierAddress,
    withdrawVerifierAddress,
    revokeVerifierAddress,
  );
  console.log('Tsunami:', tsunami.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x7B5D4B88B5548D9d3d32E0216eF47C7aE54edc27 --> deployed contract
