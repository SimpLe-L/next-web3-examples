import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import styles from "./index.module.css";
import { useEffect, useState } from 'react';

interface AccountProps {
  propState?: {
    addr: string,
    name: string
  }
}
export const Account: React.FC<AccountProps> = ({ propState }) => {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  // const formattedAddress = formatAddress(address);

  type AddrType = `0x${string}` | undefined | string;

  const [accountAddress, setAccountAddress] = useState<AddrType>(address);

  useEffect(() => {
    const getAdd = propState?.addr ?? address;
    setAccountAddress(getAdd);
  }, []);

  return (
    <div className={styles.account}>
      <div className={styles.infos}>
        {ensAvatar ? (
          <img alt="ENS Avatar" className={styles.avatar} src={ensAvatar} />
        ) : (
          <div className={styles.avatar} />
        )}
        <div className={styles.stack}>
          {accountAddress && (
            <div className={styles.text}>
              {formatAddress(accountAddress)}
            </div>
          )}
          <div className={styles.subtext}>
            已链接 {connector?.name || propState?.name} 钱包
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={() => disconnect()} type="button">
        Disconnect
      </button>
    </div>
  );
}

function formatAddress(address?: string) {
  if (!address) return null;
  return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}