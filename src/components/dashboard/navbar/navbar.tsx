/*
 * @Description:  Navbar
 * @Author: liaolei
 * @Date: 2024-03-20 14:08:54
 * @LastEditors: L
 * @LastEditTime: 2024-03-20 21:58:28
 */
"use client";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWallet from "@/components/connectWallet";
import { usePathname } from "next/navigation";
import styles from "./index.module.css"
import { useState } from "react";

const mappings = {
  vote: "投票",
  rowdfunding: "众筹",
  nft: "nft市场",
  erc20: "ERC20",
  staking: "质押挖矿",
}
type MappingKeys = keyof typeof mappings;

const getStringByKey = (key: MappingKeys): string => {
  return mappings[key];
}

const Navbar = () => {
  const pathname = usePathname();
  const getPath = pathname.split("/").pop();

  const [visible, setVisible] = useState(false);
  const changeVisible = () => {
    setVisible(false);
  }
  return (
    <div className={styles.container}>
      <span className={styles.path}>{getPath}-{getStringByKey(getPath as MappingKeys)}</span>
      {/* <ConnectButton
        label="CONNECT"
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
      /> */}

      <div className={styles.connect} onClick={() => setVisible(!visible)}>CONNECT</div>
      {visible ? <ConnectWallet changeVisible={changeVisible} /> : null}
    </div>
  );
};

export default Navbar;
