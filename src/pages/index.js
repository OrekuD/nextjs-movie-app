import { Categories, Card, Layout } from "../components";
import fetch from "isomorphic-unfetch";

const Index = ({ data }) => {
  if (!data) {
    return <h1> A spinner goes here </h1>;
  }
  return (
    <Layout>
      <p> Trending </p>
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
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIE_DB_API_KEY}`
  );
  const data = await response.json();
  return { data: data.results };
};

export default Index;
