import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: '0.8.17' }, { version: '0.6.11' }] },
};

export default config;
