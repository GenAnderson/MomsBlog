import { Fragment } from "react";
import Link from "next/link";

const DisplayResult = function ({ data }: any) {
  const { id, title, category, description, date } = data;

  return (
    <Fragment key={id}>
      <strong>
        <Link
          href={{
            pathname: `${id}`,
          }}
        >
          <a>{title}</a>
        </Link>
      </strong>

      <div>{category}</div>
      <div>{date}</div>
      <div>{description}</div>
    </Fragment>
  );
};

export default DisplayResult;
