import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { a, b } from "./Products";
function App() {
  console.log(a, b);
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
