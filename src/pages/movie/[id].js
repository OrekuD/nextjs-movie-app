import { useRouter } from "next/router";
import { Layout, Spinner } from "../../components";
import { useEffect, useState } from "react";
import { MOVIE_DB_API_KEY } from "../../constants";

const Movie = () => {
  const router = useRouter();

  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, [router.query]);

  const fetchData = async () => {
    // console.log(router);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    // setData(data.results);
    setIsLoaded(true);
    console.log(data);
  };

  if (!isLoaded) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          paddingTop: 100,
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );
  } else {
    return <Layout> {data.title} </Layout>;
  }
};

// Movie.getInitialProps = async (ctx) => {
//   console.log(ctx);
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`
//   );
//   const data = await response.json();
//   return { data: data.results };
// };

export default Movie;
