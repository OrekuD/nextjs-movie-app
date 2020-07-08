import { dummy } from "../dummy-data";
import Card from "./Card";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Category = ({ name, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    console.log(id);
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=005d6a62314e432e6fe64e784f23f799&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=${id}`
    );
    const data = await response.json();
    setData(data.results);
    console.log(data);
  };

  if (!data || data.length === 0) {
    return <h1> Place some spinner here </h1>;
  }

  return (
    <div>
      <h1> {name} </h1>
      <div className="banner">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
