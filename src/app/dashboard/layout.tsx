import styles from '@/components/dashboard/dashboard.module.css';

const DashboardPge = ({children}: {children: React.ReactNode}) => {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        左侧列表
      </div>
      <div className={styles.content}>
        navbar
        { children }
      </div>
    </div>
  );
};

export default DashboardPge;
