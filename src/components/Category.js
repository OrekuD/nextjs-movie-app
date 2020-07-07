import { dummy } from "../dummy-data";
import Card from "./Card";

const Categroy = ({ name }) => {
  return (
    <div>
      <h1> {name} </h1>
      <div className="banner">
        {dummy.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Categroy;
