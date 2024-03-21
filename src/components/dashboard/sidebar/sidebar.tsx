/*
 * @Description:  sidebar
 * @Author: liaolei
 * @Date: 2024-03-20 14:07:30
 * @LastEditors: L
 * @LastEditTime: 2024-03-20 21:20:47
 */
import MenuItem from "./menuItem/menuItem"
import styles from "./index.module.css"

const menuList = [
  {
    menuName: "web3",
    list: [
      {
        title: "Vote",
        path: "/dashboard/vote",
      },
      {
        title: "Crowdfunding",
        path: "/dashboard/rowdfunding",
      },
      {
        title: "NFT Market",
        path: "/dashboard/nft",
      },
      {
        title: "ERC20 token",
        path: "/dashboard/erc20",
      },
      {
        title: "Staking Mining",
        path: "/dashboard/staking",
      }
    ]
  },
  {
    menuName: "About",
    list: [
      {
        title: "About",
        path: "/dashboard/about",
      }
    ]
  },
]

const Sidebar = () => {

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuList.map((menu) => (
          <li key={menu.menuName}>
            <span className={styles.menu}>{menu.menuName}</span>
            {menu.list.map((item) => (
              <MenuItem item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
