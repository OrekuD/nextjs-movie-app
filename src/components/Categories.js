import { useState } from "react";
import Category from "./Category";

const genres = [
  {
    id: 28,
    name: "Action",
    component: <Category name="Action" id={28} />,
  },
  {
    id: 12,
    name: "Adventure",
    component: <Category name="Adventure" id={12} />,
  },
  {
    id: 16,
    name: "Animation",
    component: <Category name="Animation" id={16} />,
  },
  {
    id: 35,
    name: "Comedy",
    component: <Category name="Comedy" id={35} />,
  },
  {
    id: 27,
    name: "Horror",
    component: <Category name="Horror" id={27} />,
  },
  {
    id: 80,
    name: "Crime",
    component: <Category name="Crime" id={80} />,
  },
  {
    id: 10751,
    name: "Family",
    component: <Category name="Family" id={10751} />,
  },
  {
    id: 14,
    name: "Fantasy",
    component: <Category name="Fantasy" id={14} />,
  },
  {
    id: 10749,
    name: "Romance",
    component: <Category name="Romance" id={10749} />,
  },
  {
    id: 878,
    name: "Science Fiction",
    component: <Category name="Science Fiction" id={878} />,
  },
];

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="categories">
      <p className="title"> Browse by categories </p>

      <div className="list">
        {genres.map(({ name, id }, index) => (
          <p
            key={id}
            onClick={() => setSelectedIndex(index)}
            className={index === selectedIndex ? "selected" : ""}
          >
            {name}
          </p>
        ))}
      </div>
      {genres[selectedIndex].component}
    </div>
  );
};

export default Categories;
