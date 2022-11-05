import TEMPDATA from "../../../tempData";
import Link from "next/link";

import styles from "./blogs.module.scss";

function searchBlog() {
  return (
    <div className={styles.blogContainer}>
      <h1>Blog search</h1>
      <div className={styles.searchContainer}>
        <form>
          <label htmlFor="category"></label>
          <input
            type="text"
            placeholder="Category"
            id="category"
            name="category"
            className={styles.searchContainer__category}
          />
          <label htmlFor="Date"></label>
          <input
            type="date"
            placeholder="Date"
            id="date"
            name="date"
            className={styles.searchContainer__date}
          />
        </form>
      </div>
      <div className={styles.searchResults}>
        <div className={styles.searchResults__subHeader}>
          <div>Blog Title</div>
          <div>Category</div>
          <div>Description</div>
        </div>
        <div className={styles.searchResults__results}>
          {TEMPDATA.map(({ id, title, category, description }) => (
            <>
              <Link
                href={{
                  pathname: `${id}`,
                }}
              >
                {title}
              </Link>
              <div>{category}</div>
              <div>{description}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default searchBlog;
