import { Categories, Card, Layout } from "../components";
// import fetch from "isomorphic-unfetch";
import { MOVIE_DB_API_KEY } from "../constants";

const Index = ({ data }) => {
  if (!data) {
    return <h1> A spinner goes here </h1>;
  }
  return (
    <Layout>
      <p className="trending"> Trending </p>
      <div className="banner">
        {data.slice(0, 7).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Categories />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIE_DB_API_KEY}`,
    {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    }
  );
  const data = await response.json();
  return { data: data.results };
};

export default Index;
