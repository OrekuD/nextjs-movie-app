import { useRouter } from "next/router";
import { Layout } from "../../components";
import { useEffect, useState } from "react";

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
      `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=005d6a62314e432e6fe64e784f23f799&language=en-US`
    );
    const data = await response.json();
    // setData(data.results);
    setIsLoaded(true);
    console.log(data);
  };

  if (!isLoaded) {
    return <h1> Place some spinner here </h1>;
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
