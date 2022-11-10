import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";

import TEMPDATA, { uniqCategory } from "../../../tempData";

import styles from "./blogs.module.scss";

function searchBlog() {
  const { state, setState } = useState();

  const handleChange = (event: any) => {
    console.log(event.target.value);

    const searchString = event.target.value.toLowerCase();
  };
  return (
    <div className={styles.blogContainer}>
      <h1>Blog search</h1>
      <div className={styles.searchContainer}>
        <form>
          <select onChange={handleChange}>
            {uniqCategory.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
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
            <Fragment key={id}>
              <Link
                href={{
                  pathname: `${id}`,
                }}
              >
                {title}
              </Link>

              <div>{category}</div>
              <div>{description}</div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default searchBlog;
