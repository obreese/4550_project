function Home() {
  const search = () => {
    console.log("I did a search thing");
  };

  return (
    <div>
      <input type="search"></input>
      <button>Search</button>
    </div>
  );
}

export default Home;
