// const AnimeRecom = () => {
//   return <h1>test anime rekomendasi</h1>;
// };

// export default AnimeRecom;

// const temp = JSON.parse(localStorage.getItem('Name', 'Image') || '[]');
const temp = JSON.parse(localStorage.getItem("Name") || "[]");

const Posts = () => {
  const [state, setState] = React.useState(temp);

  const deleteItem = (removeindex) => {
    // localStorage.removeItem('Name');
    // localStorage.removeItem('Image');

    setState((s) => s.filter((_, index) => index !== removeindex));
  };

  React.useEffect(() => {
    localStorage.setItem("Name", JSON.stringify(state));
  }, [state]);

  return (
    <div className="post-data">
      <div className="post-data-content">
        {temp.map((val, index) => (
          <div className="posts-data" key={index}>
            <button
              type="button"
              className="delete-post"
              onClick={() => deleteItem(index)}
            >
              x
            </button>
            <img src={val.image} alt={val.image} />
            <h3>{val.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
