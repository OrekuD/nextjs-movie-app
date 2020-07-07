import { Categories, Card, Layout } from "../components";

const dummy = [
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
];

const Index = () => (
  <Layout>
    <div className="banner">
      {dummy.map((item) => (
        <Card />
      ))}
    </div>
    <Categories />
  </Layout>
);

export default Index;
