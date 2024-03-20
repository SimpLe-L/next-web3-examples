/*
 * @Description:  MenuItem
 * @Author: liaolei
 * @Date: 2024-03-20 14:10:18
 * @LastEditors: liaolei
 * @LastEditTime: 2024-03-20 14:19:51
 */
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMenuItem } from "@/types"

import styles from "./index.module.css"

const MenuItem = ({ item }: { item: IMenuItem }) => {
  const pathname = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuItem;
