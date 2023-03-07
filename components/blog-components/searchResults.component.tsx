import Result from "./displayResult.component";

import styles from "./searchResults.module.scss";

interface blogDataProps {
  resultingBlogs: {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
  }[];
}

const SearchResults = ({ resultingBlogs }: blogDataProps) => {
  typeof resultingBlogs.map((testItem) => console.log(testItem));

  return (
    <div className={styles.searchResults}>
      <div className={styles.searchResults__subHeader}>
        <div>Blog Title</div>
        <div>Category</div>
        <div>Date</div>
        <div>Description</div>
      </div>
      <div className={styles.searchResults__results}>
        {resultingBlogs.map((blogData) => (
          <Result
            key={blogData.id}
            id={blogData.id}
            title={blogData.title}
            category={blogData.category}
            date={blogData.date}
            description={blogData.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
