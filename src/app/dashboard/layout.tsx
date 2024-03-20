/*
 * @Description:  
 * @Author: liaolei
 * @Date: 2024-03-20 11:03:55
 * @LastEditors: liaolei
 * @LastEditTime: 2024-03-20 14:43:53
 */
import styles from '@/components/dashboard/dashboard.module.css';
import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';

const DashboardPge = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardPge;
