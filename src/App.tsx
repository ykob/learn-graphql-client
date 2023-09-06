import { useDraftArticlesQuery } from "./graphql/graphql-operations";
import "./App.css";

function App() {
  const { loading, error, data } = useDraftArticlesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Error : data is undefined</p>;

  return data.draftArticles.map((data) => (
    <div key={data!.id}>
      <h3>{data!.title}</h3>
      <p>{data!.body}</p>
    </div>
  ));
}

export default App;
