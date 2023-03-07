import { Fragment } from "react";
import Link from "next/link";

interface blogProps {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
}

const Result = ({ id, title, category, date, description }: blogProps) => {
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

export default Result;
