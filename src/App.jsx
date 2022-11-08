import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(null);
  async function getFetch() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    console.log("cargo");
    const data = await res.json();
    console.log(data.results);
    setData(data.results);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <Layout>
      <section className="grid-container">
        {data?.map((el) => {
          return (
            <article key={el.id} className="item">
              <h3>{el.name}</h3>
              <img src={el.image} />
            </article>
          );
        })}
      </section>
    </Layout>
  );
}

export default App;
