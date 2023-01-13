import type { AppProps } from 'next/app';
import { ChainId, Web3sdksProvider } from '@web3sdks/react';
import { SessionProvider } from "next-auth/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>  
      <Web3sdksProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </Web3sdksProvider>
    </SessionProvider>
  );
}

export default MyApp;
