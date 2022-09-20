import './App.css';

let name = "Fahad";

function App() {
  return (
    <>
      <h1>Hello, {name}</h1>
      <Registration title="Full Stack Web Developer" name="Fuad"></Registration>
    </>
  );
}

function Registration(props) {
  return (
    <>
      <h2>
        I can Access the Variable from this Component as Well See: {name}
      </h2>
      <h1>We can access props: {props.title}</h1>
      <h1>We can access props: {props.name}</h1>
    </>
  );
}

export default App;
