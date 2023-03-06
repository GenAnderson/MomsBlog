import styles from "./blogs.module.scss";

function createBlog() {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const handleDateClick = function (event: any) {
    console.log(event.target.value);
  };

  return (
    <div className={styles.createBlogContainer}>
      <div className={styles.createBlog__form}>
        <form>
          <div>
            <label htmlFor="headerImg"></label>
            <input
              type="text"
              placeholder="Header Image"
              id="headerImg"
              name="headerImg"
              className={styles.createBlog__input}
            />
            <label htmlFor="backgroundImg"></label>
            <input
              type="text"
              placeholder="Background Image"
              id="backgroundImg"
              name="backgroundImg"
              className={styles.createBlog__input}
            />
          </div>
          <div>
            <label htmlFor="blogTitle"></label>
            <input
              type="text"
              placeholder="Blog Title"
              id="blogTitle"
              name="blogTitle"
              className={styles.createBlog__input}
            />
            <label htmlFor="blogDate"></label>
            <input
              type="date"
              placeholder="Date"
              id="blogDate"
              name="blogDate"
              className={styles.createBlog__input}
              defaultValue={date}
              onClick={handleDateClick}
            />
            <label htmlFor="blogCategory"></label>
            <input
              type="text"
              placeholder="Category"
              id="blogCategory"
              name="blogCategory"
              className={styles.createBlog__input}
            />
          </div>
          <div>
            <label htmlFor="textBox"></label>
            <textarea
              placeholder="Text Box"
              id="textBox"
              name="textBox"
              className={styles.createBlog__input__textArea}
            />
          </div>
          <div>
            <label htmlFor="img1"></label>
            <input
              type="text"
              placeholder="Image 1"
              id="img1"
              name="img1"
              className={styles.createBlog__input}
            />
            <label htmlFor="img2"></label>
            <input
              type="text"
              placeholder="Image 2"
              id="img2"
              name="img2"
              className={styles.createBlog__input}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default createBlog;
