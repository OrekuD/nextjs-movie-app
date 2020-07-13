import { useRouter } from "next/router";
import { Layout, Spinner, StarRatings } from "../../components";
import { useEffect, useState } from "react";
import { MOVIE_DB_API_KEY } from "../../constants";
import { movie } from "../../config";

const Movie = () => {
  const router = useRouter();

  const [data, setData] = useState({});
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, [router.query]);

  // const fetchData = async () => {
  //   // console.log(router);
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
  //   );
  //   const data = await response.json();
  //   // setData(data.results);
  //   setIsLoaded(true);
  //   console.log(data);
  // };

  // if (!isLoaded) {
  //   return (
  //     <div
  //       style={{
  //         height: "100%",
  //         width: "100%",
  //         display: "flex",
  //         paddingTop: 100,
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Spinner />
  //     </div>
  //   );
  // } else {
  //   return <Layout>{data.title} </Layout>;
  // }

  const {
    adult,
    backdrop_path,
    original_title,
    original_language,
    release_date,
    genres,
    overview,
    poster_path,
    popularity,
    status,
    runtime,
    title,
    vote_average,
    vote_count,
  } = movie;

  return (
    <Layout>
      <div className="movie">
        <div className="backdrop_container"></div>
        <div className="top_container">
          <div className="poster_container"></div>
          <div className="content">
            <h4> {title} </h4>
            <StarRatings rating={vote_average} />
            <div className="row">
              <p className="text1">
                {vote_average} <span>/ 10 </span>
              </p>
              <p className="text1"> {vote_count} votes </p>
            </div>
            <div className="row">
              <p className="text2">
                {runtime} min | {status}
              </p>
            </div>
          </div>
        </div>
        <div className="bottom_container">
          <p className="title"> Storyline </p>
          <p className="overview">{overview}</p>
          <div className="genres">
            {genres.map(({ id, name }) => (
              <div key={id} className="badge">
                <p> {name} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movie;
