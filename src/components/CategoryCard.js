import Link from "next/link";
import StarRatings from "./StarRatings";

const CategoryCard = ({ data }) => {
  const { id, title, poster_path, vote_average } = data;

  return (
    <Link as={`/movie/${id}`} href="/movie/[id]">
      <div className="category-card">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="content">
          <p>{title}</p>
          <StarRatings rating={vote_average} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
