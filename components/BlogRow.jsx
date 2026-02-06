import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogRow({ blog }) {
  const { slug, title, abstract, publishedOn } = blog;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div className="details">
      <div className="details__box">
        <div className="info">
          <Link href={`/blogs/${slug}`}>
            <h1 className="heading-1">{title}</h1>
          </Link>
          <p className="date text-green-500 font-bold">
            <time dateTime={publishedOn}>{humanizedDate}</time>
          </p>
        </div>

        <div className="box">
          <div className="overview">
            {abstract}
            {"   "}
            <Link
              href={`/blogs/${slug}`}
              style={{
                display: "inline-flex",
                gap: ".3rem",
                alignItems: "center",
                color: "var(--color-primary-300)",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: ".225em",
              }}
            >
              Continue Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
