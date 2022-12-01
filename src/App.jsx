import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import useStateHooks from "./hooks/useStateHooks";

function App() {
  const [loadings, setLoadings] = useState(false);
  const {
    stored: data,
    setStored: setData,
    setLocalStored,
  } = useStateHooks(null);
  console.log(data, "data");
  async function getFetch() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      console.log("cargo");
      const data = await res.json();
      console.log(data.results);
      if (!data) return;
      if (data) {
        setLoadings(true);
        setData(data?.results);
        setLocalStored(data?.results);
      }
    } catch (error) {
      setLoadings(false);

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
    <Layout footer>
      <section className="grid-container">
        <CharacterList data={data} loadings={loadings} />
      </section>
    </Layout>
  );
}

export default App;
