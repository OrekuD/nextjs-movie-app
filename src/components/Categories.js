const Categories = () => {
  const categories = [
    { id: Math.random().toString(), name: "Action" },
    { id: Math.random().toString(), name: "Fantasy" },
    { id: Math.random().toString(), name: "Romance" },
  ];

  const Category = <p> One </p>;
  return (
    <div className="categories">
      <p className="title"> Browse by categories </p>

      <div className="list">
        {categories.map(({ name, id }) => (
          <p key={id}> {name} </p>
        ))}
      </div>
      {Category}
    </div>
  );
};

export default Categories;
