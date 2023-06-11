import { FC, PropsWithChildren } from 'react';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, chain} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { APP_NAME } from 'config/constants';
import { mantleTestnet } from 'config/mantleNetworkConfig';
import { keyAlchemyGoerli } from 'config/env';



const { provider, chains } = configureChains(
  [mantleTestnet, chain.goerli,],
  
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.public! }),
    }),
    alchemyProvider({ apiKey: keyAlchemyGoerli })
  ],
  
);

const { connectors } = getDefaultWallets({
  appName: APP_NAME,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
