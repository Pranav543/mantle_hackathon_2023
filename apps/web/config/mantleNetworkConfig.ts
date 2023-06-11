import { Chain } from 'wagmi'


export const mantleTestnet: Chain = {
    id: 5001,
    name: 'Mantle Testnet',
    network: 'Mantle Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'BIT',
      symbol: 'BIT',
    },
  rpcUrls: {
    public: "https://rpc.testnet.mantle.xyz",
    default: "https://rpc.testnet.mantle.xyz",
  },
  blockExplorers: {
    default: {
      name: "Mantle Block Explorer",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
  };
