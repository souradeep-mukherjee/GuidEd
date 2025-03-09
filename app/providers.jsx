"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// ✅ Create a QueryClient instance
const queryClient = new QueryClient();

// 🛑 Replace with your WalletConnect Project ID
const WALLETCONNECT_PROJECT_ID = "e64ef3d13e011bdff64fe6424e2669f7";

// ✅ Define blockchain networks
const chains = [mainnet];

// ✅ Use getDefaultConfig instead of manually setting connectors
const config = getDefaultConfig({
  appName: "GuidEd",
  projectId: WALLETCONNECT_PROJECT_ID,
  chains,
  autoConnect: false, // Auto-connect wallets
});

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
