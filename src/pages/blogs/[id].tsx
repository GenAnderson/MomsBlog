import { useRouter } from "next/router";
import styles from "./blogs.module.scss";

function ViewBlog() {
  const router = useRouter();

  const { id } = router.query;
  console.log(id);

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <div>BLOG TITLE</div>
          <div>BLOG DATE</div>
          <div>BLOG CATEGORY</div>
        </div>
        <div className={styles.viewBlog__body}>
          <img src=""></img>
          <img src=""></img>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
