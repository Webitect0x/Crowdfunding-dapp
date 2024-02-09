"use client";

import { Toaster } from "react-hot-toast";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { WagmiConfig, createConfig, configureChains, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const config = createConfig({
  publicClient,
  webSocketPublicClient,
});

const Providers = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="adb564598460c78913d2d9bff6f738cb"
    >
      <WagmiConfig config={config}>
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </WagmiConfig>
    </ThirdwebProvider>
  );
};

export default Providers;
