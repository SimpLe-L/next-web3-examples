import { WagmiProvider } from 'wagmi';
import { config } from './wagmi';
import WalletConnect from "./walletConnect";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface WalletProps {
  changeVisible: () => void;
}
const ConnectWallet: React.FC<WalletProps> = ({ changeVisible }) => {

  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnect changeVisible={changeVisible} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default ConnectWallet;