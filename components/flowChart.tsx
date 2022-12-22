import styles from "./allComponents.module.scss";

const FlowChart = function () {
  return (
    <div className={styles.flowContainer}>
      <div className={styles.flowContainer}>
        <div>Blog Title</div>
        <div>Category</div>
        <div>Date</div>
        <div>Description</div>
      </div>
      <div className={styles.flowContainer}>
        {blogData.map((data: any) => (
          <DisplayResult key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FlowChart;
