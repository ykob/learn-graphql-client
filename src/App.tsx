import { useQuery, gql } from "@apollo/client";
import "./App.css";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(
    ({
      id,
      name,
      description,
      photo,
    }: {
      id: string;
      name: string;
      description: string;
      photo: string;
    }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <p>About this location:</p>
        <p>{description}</p>
      </div>
    )
  );
}

export default App;
