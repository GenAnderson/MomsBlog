import { useState, useEffect } from "react";
import SearchResults from "../../../components/blog-components/searchResults.component";
import TEMPDATA, { uniqCategory } from "../../../tempData";

import styles from "./blogs.module.scss";

function SearchBlog() {
  const [selectCategoryState, setCategoryState] = useState("");
  const [typeTitleState, setTitleState] = useState("");
  const [blogData, setBlogData] = useState(TEMPDATA);
  const [filteredBlog, setFilteredBlog] = useState(blogData);

  function handleSearchChange(e: any) {
    e.preventDefault();
    if (e.target.id === "title") {
      const searchTitle = e.target.value.toLowerCase();
      setTitleState(searchTitle);
    }
    if (e.target.id === "category") {
      const searchCategory = e.target.value.toLowerCase();
      setCategoryState(searchCategory);
    }
  }

  useEffect(() => {
    // filter category only
    if (!typeTitleState && selectCategoryState) {
      const newFilteredCategory = blogData.filter((blog: any) => {
        return blog.category.toLowerCase().includes(selectCategoryState);
      });
      setFilteredBlog(newFilteredCategory);
    }

    // default setting ("category" is selected)
    if (!typeTitleState && selectCategoryState === "category") {
      setFilteredBlog(blogData);
    }

    // filter category and title
    if (selectCategoryState !== "category" && typeTitleState) {
      const filteredCatforTitle = blogData.filter((blog: any) => {
        return blog.category.toLowerCase().includes(selectCategoryState);
      });
      const newFilterCatWithTitle = filteredCatforTitle.filter((blog) => {
        return blog.title.toLocaleLowerCase().includes(typeTitleState);
      });
      setFilteredBlog(newFilterCatWithTitle);
    }

    // filter title only
    if (typeTitleState && selectCategoryState === "category") {
      const newFilteredTitle = blogData.filter((blog: any) => {
        return blog.title.toLocaleLowerCase().includes(typeTitleState);
      });
      setFilteredBlog(newFilteredTitle);
    }
  }, [blogData, selectCategoryState, typeTitleState]);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogSearchHeader}>
        <div>
          <img src="../book.png" className={styles.blogSearchImage} />
          <h1>Blog search</h1>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <form>
          <label htmlFor="title"></label>
          <input
            type="title"
            placeholder="Title"
            id="title"
            name="title"
            className={styles.searchContainer__title}
            onChange={handleSearchChange}
          />

          <select id="category" onChange={handleSearchChange}>
            <option>Category</option>
            {uniqCategory.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className={styles.searchResultsContainer}>
        <SearchResults blogData={filteredBlog} />
      </div>
    </div>
  );
}

export default SearchBlog;
