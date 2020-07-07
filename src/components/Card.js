import Link from "next/link";

const Card = ({ data }) => {
  const { id } = data;

  return (
    <Link as={`/movie?id=${id}`} href="/movie">
      <div className="card"></div>
    </Link>
  );
};

export default Card;
