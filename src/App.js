import Logo from './logo.svg';
import './App.css';

let name = "Fahad";

function App() {
  return (
    <>
      <h1>Hello, {name}</h1>
      <img src={Logo} alt="" style={{ textAlign: "center", backgroundColor: "black", padding: "15px", borderRadius: "10px", height: "200px", margin: "20px auto", display: "block" }} />
      <div className="container">
        <Registration title="Registration Form Component 1" name="Fahad"></Registration>
        <Registration title="Registration Form Component 2" name="Fuad"></Registration>
        <Registration title="Registration Form Component 3" name="Jihad"></Registration>
        <Registration title="Registration Form Component 4" name="Rahat"></Registration>
        <Registration title="Registration Form Component 5" name="Billal"></Registration>
        <Registration title="Registration Form Component 6" name="Khaja"></Registration>
      </div>
    </>
  );
}

function Registration(props) {
  return (
    <>
      <div className="reg-div">
        <p>
          I can Access the Variable from this Component as Well See: {name}
        </p>
        {/* Accessing Props Inside of a Component */}
        <p>We can access props: {props.title}</p>
        <p>We can access props: {props.name}</p>
      </div>
    </>
  );
}

export default App;
