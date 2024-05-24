import "./App.css";
import { useState, useEffect } from "react";

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

const query = `query{
  allLifts{
    name
    elevationGain
    status
  }
}`;

const opts = {
  method: "POST",
  headers: { "content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  console.log(data);
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <h1>No Data</h1>;
  return data.data.allLifts.map((lift) => (
    <Lift
      name={lift.name}
      elevationGain={lift.elevationGain}
      status={lift.status}
    />
  ));
}

export default App;
