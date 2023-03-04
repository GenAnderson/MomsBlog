import Result from "./displayResult.component";

import styles from "./searchResults.module.scss";

const SearchResults = ({ blogData }: any) => {
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
          <Result key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
