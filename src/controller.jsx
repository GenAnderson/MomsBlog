import TEMPDATA from "../tempData";

export const findLatestBlog = () => {
  // Change date format with date constructor
  let newArr = [];
  TEMPDATA.map((blog) =>
    newArr.push({ id: blog.id, date: new Date(blog.date) })
  );

  // Find latest and return blog.id
  const { id } = newArr.reduce((a, b) => (a.date > b.date ? a : b));

  return id;
};
