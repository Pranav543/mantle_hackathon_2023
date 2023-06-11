export const env = process.env.NODE_ENV as string;
export const isDev = env === 'development';

export const rpcUrlGoerli = process.env.NEXT_PUBLIC_RPC_URL_GOERLI as string;

export const keyAlchemyGoerli = rpcUrlGoerli.split('/').pop() as string;
