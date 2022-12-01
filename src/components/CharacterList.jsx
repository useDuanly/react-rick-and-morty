import Character from "./Character";

function CharacterList({ data, loadings }) {
  return (
    <section className="grid-container">
      {loadings &&
        data.map((el) => {
          return <Character el={el} />;
        })}
    </section>
  );
}

export default CharacterList;
