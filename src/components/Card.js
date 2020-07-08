import Link from "next/link";

const Card = ({ data }) => {
  const { id, title } = data;

  return (
    <Link as={`/movie/${id}`} href="/movie/[id]">
      <div className="card">
        <p> {title} </p>
      </div>
    </Link>
  );
};

export default Card;
