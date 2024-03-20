/*
 * @Description:  Navbar
 * @Author: liaolei
 * @Date: 2024-03-20 14:08:54
 * @LastEditors: liaolei
 * @LastEditTime: 2024-03-20 17:43:32
 */
"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from "next/navigation";
import styles from "./index.module.css"

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <span className={styles.path}>{pathname.split("/").pop()}</span>
      <ConnectButton
        label="CONNECT"
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
      />
    </div>
  );
};

export default Navbar;
