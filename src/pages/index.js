import { Categories, Card, Layout } from "../components";
import { dummy } from "../dummy-data";

const Index = () => (
  <Layout>
    <p> Now showing </p>
    <div className="banner">
      {dummy.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
    <Categories />
  </Layout>
);

export default Index;
