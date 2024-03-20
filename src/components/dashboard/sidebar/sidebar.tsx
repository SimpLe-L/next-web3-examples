/*
 * @Description:  sidebar
 * @Author: liaolei
 * @Date: 2024-03-20 14:07:30
 * @LastEditors: liaolei
 * @LastEditTime: 2024-03-20 14:42:07
 */
import MenuItem from "./menuItem/menuItem"
import styles from "./index.module.css"

const menuList = [
  {
    menuName: "NFT",
    list: [
      {
        title: "NFT",
        path: "/dashboard/nft",
      }
    ]
  },
  {
    menuName: "DEFI",
    list: [
      {
        title: "DEFI",
        path: "/dashboard/defi",
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
