import { Fragment } from "react";
import Link from "next/link";
import { DataType } from "../../src/model";

const Result = ({ data }: DataType) => {
  console.log("(data)from Resultscomponent:", data);
  return (
    <Fragment key={data.id}>
      <strong>
        <Link
          href={{
            pathname: `${data.id}`,
          }}
          // data={data}
        >
          <a>{data.title}</a>
        </Link>
      </strong>

      <div>{data.category}</div>
      <div>{data.date}</div>
      <div>{data.description}</div>
    </Fragment>
  );
};

export default Result;
