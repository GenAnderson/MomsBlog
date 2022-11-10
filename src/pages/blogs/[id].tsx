import { useRouter } from "next/router";

import { getEventById } from "../../../tempData";

import styles from "./blogs.module.scss";

function ViewBlog() {
  const router = useRouter();

  const id = router.query.id;
  const event = getEventById(id);

  const { title, description, category, date, text, image } = event;

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <p>{title}</p>
          <p>{date}</p>
          <p>Category: {category}</p>
        </div>
        <div className={styles.viewBlog__body}>
          <p className={styles.viewBlog__description}>
            <em>Description: {description}</em>
          </p>
          <img className={styles.image1} src={image}></img>
          <img className={styles.image2} src=""></img>
          <p className={styles.viewBlog__text}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
