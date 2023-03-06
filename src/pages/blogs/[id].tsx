import { useRouter } from "next/router";
import { getEventById } from "../../../tempData";

import { blogProperties } from "../../model";

import styles from "./blogs.module.scss";

function ViewBlog() {
  const router = useRouter();
  const id = router.query.id;
  const event: any = getEventById(id);

  console.log(event);

  // const {
  //   title: title,
  //   category: category,
  //   blogBackground: blogBackground,
  //   date: date,
  //   text: text,
  //   image1: image1,
  //   image2: image2,
  // }: blogProperties = event;

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <img
            className={styles.viewBlog__background}
            src={event.blogBackground}
            alt={`${styles.title} background`}
          ></img>
          <div className={styles.viewBlog__headerTextContainer}>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>Category: {event.category}</p>
          </div>
        </div>
        <div className={styles.viewBlog__body}>
          <img
            className={styles.image1}
            src={event.image1}
            alt={styles.title}
          ></img>
          <img
            className={styles.image2}
            src={event.image2}
            alt={styles.title}
          ></img>
          <p className={styles.viewBlog__text}>{event.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
