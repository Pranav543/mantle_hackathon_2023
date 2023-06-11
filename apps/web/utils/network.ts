import { defaultChainId } from 'config/network';

export const getBlockExplorerUrl = (
  data: string,
  type: string = 'tx',
  chainId: number = defaultChainId,
) => {
  return `${process.env.NEXT_PUBLIC_MANTLE_TESTNET_EXPLORER}/${type}/${data}`;
};
