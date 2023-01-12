import { useState, useEffect } from "react";
import SearchResults from "../../../components/searchResults.component";
import TEMPDATA, { uniqCategory } from "../../../tempData";

import styles from "./blogs.module.scss";

function searchBlog() {
  const [selectCategoryState, setCategoryState] = useState("Category");
  const [typeTitleState, setTitleState] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState(blogData);

  const handleChangeCategory = (event: any) => {
    const selectedCategoryList = event.target.value;
    setCategoryState(selectedCategoryList);
  };

  const handleChangeTitle = (event: any) => {
    const searchTitle = event.target.value.toLocaleLowerCase();
    setTitleState(searchTitle);
  };

  useEffect(() => setBlogData(TEMPDATA), []);

  useEffect(() => {
    const newFilteredCategory = blogData.filter((blog: any) => {
      return blog.category.includes(selectCategoryState);
    });

    selectCategoryState === "Category"
      ? setFilteredBlog(blogData)
      : setFilteredBlog(newFilteredCategory);
  }, [blogData, selectCategoryState]);

  useEffect(() => {
    const newFilteredTitle = blogData.filter((blog: any) => {
      return blog.title.toLocaleLowerCase().includes(typeTitleState);
    });

    setFilteredBlog(newFilteredTitle);
  }, [blogData, typeTitleState]);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogSearchArea}>
        <div>
          <img src="../book.png" className={styles.blogSearchImage} />
          <h1>Blog search</h1>
        </div>
        <div className={styles.searchContainer}>
          <form>
            <label htmlFor="title"></label>
            <input
              type="title"
              placeholder="Title"
              id="title"
              name="title"
              className={styles.searchContainer__date}
              onChange={handleChangeTitle}
            />
            <select onChange={handleChangeCategory}>
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
      </div>
      <div className={styles.searchResultsContainer}>
        <SearchResults blogData={filteredBlog} />
      </div>
    </div>
  );
}

export default searchBlog;
