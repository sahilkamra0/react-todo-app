import Button from "./Button";

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Button text="Click Me" onClick={() => alert("Hello Sahil")} />
    </>
  );
}

export default Home;
