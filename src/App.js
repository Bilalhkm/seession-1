import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";

function App(props) {
  console.log(props);
  if (props.name) {
    return <h1>Hello {props.name + " " + props.sureName}</h1>;
  } else {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;
