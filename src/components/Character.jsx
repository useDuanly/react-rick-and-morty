const Character = ({ el }) => {
  return (
    <article className="item" key={el.id}>
      <h3>{el.name}</h3>
      <img src={el.image} />
    </article>
  );
};

export default Character;
