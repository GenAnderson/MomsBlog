import { useRouter } from "next/router";
import Image from "next/image";

// import { getEventById } from "../../../tempData";
import TEMPDATA from "../../../tempData";

import styles from "./blogs.module.scss";

const ViewBlog = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  function getBlogById(id: number) {
    return TEMPDATA.find((event) => event.id === id);
  }

  const blog = getBlogById(id);

  if (blog === undefined) return;

  return (
    <div>
      <div className={styles.viewBlogContainer}>
        <div className={styles.viewBlog__header}>
          <img
            className={styles.viewBlog__background}
            src={blog.blogBackground}
            alt={`${styles.title} background`}
          ></img>
          <div className={styles.viewBlog__headerTextContainer}>
            <p>{blog.title}</p>
            <p>{blog.date}</p>
            <p>Category: {blog.category}</p>
          </div>
        </div>
        <div className={styles.viewBlog__body}>
          <img
            className={styles.image1}
            src={blog.image1}
            alt={styles.title}
          ></img>
          <img
            className={styles.image2}
            src={blog.image2}
            alt={styles.title}
          ></img>
          <p className={styles.viewBlog__text}>{blog.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
