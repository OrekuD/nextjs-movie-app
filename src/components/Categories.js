import { useState, useEffect } from "react";
import Category from "./Category";

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const categories = [
    { id: Math.random().toString(), name: "Action" },
    { id: Math.random().toString(), name: "Fantasy" },
    { id: Math.random().toString(), name: "Romance" },
  ];

  const components = [
    { component: <Category name="Action" /> },
    { component: <Category name="Fantasy" /> },
    { component: <Category name="Romance" /> },
  ];

  return (
    <div className="categories">
      <p className="title"> Browse by categories </p>

      <div className="list">
        {categories.map(({ name, id }, index) => (
          <p
            key={id}
            onClick={() => setSelectedIndex(index)}
            className={index === selectedIndex ? "selected" : ""}
          >
            {name}
          </p>
        ))}
      </div>
      {components[selectedIndex].component}
    </div>
  );
};

export default Categories;
