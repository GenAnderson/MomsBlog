import { useRouter } from "next/router";
import { getEventById } from "../../../tempData";

import { blogProperties } from "../../model";

import styles from "./blogs.module.scss";

function ViewBlog() {
  const router = useRouter();
  const id = router.query.id;
  const event: any = getEventById(id);

  const {
    title: title,
    category: category,
    blogBackground: blogBackground,
    date: date,
    text: text,
    image1: image1,
    image2: image2,
  }: blogProperties = event;

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <img
            className={styles.viewBlog__background}
            src={blogBackground}
            alt={`${styles.title} background`}
          ></img>
          <div className={styles.viewBlog__headerTextContainer}>
            <p>{title}</p>
            <p>{date}</p>
            <p>Category: {category}</p>
          </div>
        </div>
        <div className={styles.viewBlog__body}>
          <img className={styles.image1} src={image1} alt={styles.title}></img>
          <img className={styles.image2} src={image2} alt={styles.title}></img>
          <p className={styles.viewBlog__text}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
