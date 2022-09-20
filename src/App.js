import Logo from './logo.svg';
import './App.css';

let name = "Fahad";

// On Page Styling
const textCenter = {
  textAlign: "center",
  color: "blue",
  textDecoration: "underline"
};

function App() {
  return (
    <>
      <h1 style={textCenter}>Hello, {name}</h1>
      {/* Inline Stying in React */}
      <img src={Logo} alt="" style={{ textAlign: "center", backgroundColor: "black", padding: "15px", borderRadius: "10px", height: "200px", margin: "20px auto", display: "block" }} />
      <div className="container">
        <Registration title="Registration Form Component 1" name="Fahad" />
        <Registration title="Registration Form Component 2" name="Fuad" />
        <Registration title="Registration Form Component 3" name="Jihad" />
        <Registration title="Registration Form Component 4" name="Rahat" />
        <Registration title="Registration Form Component 5" name="Billal" />
        <Registration title="Registration Form Component 6" name="Khaja" />
      </div>
    </>
  );
}

function Registration(props) {
  return (
    <>
      <div className="reg-div">
        {/* Accessing Variables Inside of a Component */}
        <p><b>Variable: </b>{name}</p>
        {/* Accessing Props Inside of a Component */}
        <p><b>Prop: </b>{props.title}</p>
        <p><b>Prop: </b>{props.name}</p>
        {console.log('Hello')}
      </div>
    </>
  );
}

export default App;
