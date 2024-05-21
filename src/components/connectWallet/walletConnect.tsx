import { useAccount, useChainId, useConnect, useSwitchChain } from 'wagmi';
import type { Connector } from 'wagmi';
import { Account } from './Account';

import Image from 'next/image';

import closeSvg from "@/images/close.svg";
import styles from "./index.module.css";
import { useEffect, useState } from 'react';

interface WalletProps {
  changeVisible: () => void;
}

const WalletConnect: React.FC<WalletProps> = ({ changeVisible }) => {

  const { isConnected } = useAccount();
  const { connectors, connect } = useConnect()
  const { chains, switchChain } = useSwitchChain();
  const chainId = useChainId();

  // 判断是否链接的是btc生态
  const [btcConnect, setBtcConnect] = useState(false);
  const [propState, setPropState] = useState<any>(null);
  const connectBTC = async () => {
    if (window.okxwallet || window.unisat) {
      let res;
      try {
        const [okxRes] = await window.okxwallet.bitcoin.getAccounts();
        const [unisatRes] = await window.unisat.getAccounts();
        const walletName = okxRes ? "Okx Wallet" : "Unisat Wallet";
        const getAddr = okxRes || unisatRes;

        res = {
          addr: getAddr,
          name: walletName
        };
        if (getAddr) {
          setPropState(res);
          setBtcConnect(true);
        }

      } catch (e) {
        console.log(e);
      }
      // return res;
    }

  }

  useEffect(() => {
    connectBTC();
  }, []);


  const connectManual = async (type: string) => {
    let result: any;
    if (type == "okx") {
      result = await window.okxwallet.bitcoin.requestAccounts();
      // const signStr = 'sign test';
      // result = await window.okxwallet.bitcoin.signMessage(signStr, 'ecdsa')
      // console.log(result);
    } else {
      result = await window.unisat.requestAccounts();
    }

    const res = {
      addr: result[0],
      name: type == "okx" ? "Okx Wallet" : "Unisat Wallet"
    };
    setPropState(res);
    // setAlreadyConnect(isConnected || res);
    setBtcConnect(true);

    // console.log(result);
  }

  const [selectChains, setSelectChains] = useState(false);
  const combineChains = [...chains, { id: 12352, name: "Bitcoin" }];
  const [cachedConnector, setCachedConnector] = useState<any>(null);
  // let cacheConnector: Connector | CreateConnectorFn;

  const connetWallet: (connector: Connector) => void = connector => {
    if (connector.id == "com.okex.wallet") {
      setCachedConnector(connector);
      // oxk给选链弹窗
      setSelectChains(true);
    } else {
      connect({ connector, chainId });
    }

  }

  const chainSelect = (chainId: number, name: string) => {
    if (name == "Bitcoin") {
      connectManual("okx");
    } else {
      switchChain({ chainId: chainId });
      connect({ connector: cachedConnector, chainId });
    }
    setSelectChains(false);
  }

  const closeDialog = () => {
    changeVisible();
  }
  return (
    <div className={styles.container}>
      {
        (isConnected || btcConnect)
          ?
          <Account propState={propState} />
          :
          <>
            <div className={styles.wallet_wrapper}>
              {
                connectors.map(connector => (
                  <div className={styles.wallet_item} key={connector.uid}>
                    <button
                      onClick={() => connetWallet(connector)}
                    >
                      {connector.name}
                    </button>
                  </div>
                ))

              }
              <div className={styles.wallet_item} key="unisat-wallet">
                <button
                  onClick={() => connectManual("unisat")}
                >
                  Unisat Wallet
                </button>
              </div>
            </div>
          </>
      }
      {
        selectChains
          ?
          <div className={styles.chain_select}>
            {combineChains.map((chain) => (
              <button key={chain.id} onClick={() => chainSelect(chain.id, chain.name)}>
                {chain.name}
              </button>
            ))}
          </div>
          : ""
      }
      <div className={styles.close} onClick={closeDialog}>
        <Image width={22} height={22} src={closeSvg} alt='close' />
      </div>
    </div>
  );
};
export default WalletConnect;