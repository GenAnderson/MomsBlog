import styles from "./adminNav.module.scss";

const AdminNav = () => {
  return (
    <div className={styles.adminNav__container}>
      <p className={styles.adminNav__title}>Admin Tools</p>
      <p>Delete Blog</p>
      <p>Create Blog</p>
      <p>Upload Document</p>
      <p>Upload Inspiration</p>
    </div>
  );
};

export default AdminNav;
