import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(null);
  const [loadings, setLoadings] = useState(false);
  async function getFetch() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      console.log("cargo");
      const data = await res.json();
      console.log(data.results);
      setLoadings(true);
      setData(data.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getFetch();
  }, []);

  if (!loadings) {
    return (
      <div className="loadings">
        <h3>Loadings....</h3>
      </div>
    );
  }

  return (
    <Layout>
      <section className="grid-container">
        {data?.map((el) => {
          return (
            <>
              {loadings && (
                <article key={el.id} className="item">
                  <h3>{el.name}</h3>
                  <img src={el.image} />
                </article>
              )}
            </>
          );
        })}
      </section>
    </Layout>
  );
}

export default App;
