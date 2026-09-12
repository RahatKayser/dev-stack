import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Dev Stack</h1>

      {technologies.map((technology) => (
        <div key={technology.id}>
          <h2>{technology.name}</h2>
          <p>{technology.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
