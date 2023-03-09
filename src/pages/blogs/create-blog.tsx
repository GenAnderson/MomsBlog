import AdminNav from "../../../components/adminNav/adminNav";
import styles from "./blogs.module.scss";

function createBlog() {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const handleDateClick = function (event: any) {
    console.log(event.target.value);
  };

  return (
    <>
      <div className={styles.createBlogContainer}>
        <AdminNav />
        <div className={styles.createBlog__form}>
          <form>
            <div className={styles.createBlog__formFlexContainer}>
              <div>
                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="headerImg">Header Image:</label>
                  <input
                    type="text"
                    placeholder="Header Image"
                    id="headerImg"
                    name="headerImg"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="backgroundImg">Background Image:</label>
                  <input
                    type="text"
                    placeholder="Background Image"
                    id="backgroundImg"
                    name="backgroundImg"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="blogTitle">Blog Title:</label>
                  <input
                    type="text"
                    placeholder="Blog Title"
                    id="blogTitle"
                    name="blogTitle"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="blogDate">Date:</label>
                  <input
                    type="date"
                    placeholder="Date"
                    id="blogDate"
                    name="blogDate"
                    className={styles.createBlog__input}
                    defaultValue={date}
                    onClick={handleDateClick}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="blogCategory">Category:</label>
                  <input
                    type="text"
                    placeholder="Category"
                    id="blogCategory"
                    name="blogCategory"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="img1">Image 1:</label>
                  <input
                    type="text"
                    placeholder="Image 1"
                    id="img1"
                    name="img1"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__inputContainer}>
                  <label htmlFor="img2">Image 2:</label>
                  <input
                    type="text"
                    placeholder="Image 2"
                    id="img2"
                    name="img2"
                    className={styles.createBlog__input}
                  />
                </div>

                <div className={styles.createBlog__btnContainer}>
                  <button className={styles.createBlog__submitBtn}>
                    Clear all
                  </button>
                  <button className={styles.createBlog__submitBtn}>
                    Submit
                  </button>
                  <button className={styles.createBlog__submitBtn}>
                    Preview
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="textBox"></label>
                <textarea
                  placeholder="Text here"
                  id="textBox"
                  name="textBox"
                  className={styles.createBlog__input__textArea}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default createBlog;
