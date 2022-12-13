import TEMPDATA from "../tempData";

import styles from "./allComponents.module.scss";
import DisplayResult from "./displayResult.component";

const SearchResults = function ({ blogData }: any) {
  return (
    <div className={styles.searchResults}>
      <div className={styles.searchResults__subHeader}>
        <div>Blog Title</div>
        <div>Category</div>
        <div>Date</div>
        <div>Description</div>
      </div>
      <div className={styles.searchResults__results}>
        {blogData.map((data: any) => (
          <DisplayResult key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
