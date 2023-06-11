import { ethers } from 'hardhat';
const { utils, providers, Wallet } = ethers;
import { deployHasher } from './hasher';


const rpcUrl = process.env.RPC_GOERLI as string;
const privateKeys = (process.env.PRIVATE_KEYS_TEST as string).split(',');
const provider = new providers.JsonRpcProvider(rpcUrl);
const wallet = new Wallet(privateKeys[0], provider);

const maxDepositAmt = utils.parseEther('10');

const treeHeight = 20;
const wETHAddress = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const hasherAddress = '0x6262ACD0E5bBb503ac7c4B574276FC0a4F3E848d';
const proposalVerifierAddress = '0xf68dbFa5da95e7cd77a4693C71ff87EB7F1F2f74';
const withdrawVerifierAddress = '0x2369FEc114A6FC10072C5fF717B1D95CFCeD6FE9';
const revokeVerifierAddress = '0x4514005bB4c05df679374307D987917bcaE1CC97';
const registrarAddress = '0x7B5D4B88B5548D9d3d32E0216eF47C7aE54edc27';
const tsunamiAddress = '0xaDA850FF986679ca7D00c931b9Fd63B876B1c9A0'; // ETH withdraws

export async function deployContract(contractName: string, ...args: any[]) {
  const Factory = await ethers.getContractFactory(contractName);
  const instance = await Factory.connect(wallet).deploy(...args);
  return instance.deployed();
}

async function main() {

  //   const hasher = await deployHasher(wallet);
  //   console.log('hasher', hasher.address);

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
    wETHAddress,
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
