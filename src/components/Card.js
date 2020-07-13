import Link from "next/link";

const Card = ({ data }) => {
  const { id, title, backdrop_path } = data;

  return (
    <Link as={`/movie/${id}`} href="/movie/[id]">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
