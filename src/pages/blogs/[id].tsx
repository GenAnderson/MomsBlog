import { useRouter } from "next/router";

import { getEventById } from "../../../tempData";

import styles from "./blogs.module.scss";

function ViewBlog() {
  const router = useRouter();

  const id = router.query.id;
  const event = getEventById(id);

  const { title, category, blogBackground, date, text, image1, image2 } = event;

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <img
            className={styles.viewBlog__background}
            src={blogBackground}
          ></img>
          <div className={styles.viewBlog__headerTextContainer}>
            <p>{title}</p>
            <p>{date}</p>
            <p>Category: {category}</p>
          </div>
        </div>
        <div className={styles.viewBlog__body}>
          <img className={styles.image1} src={image1}></img>
          <img className={styles.image2} src={image2}></img>
          <p className={styles.viewBlog__text}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
