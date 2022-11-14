import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Browse from "./Pages/Browse/browse";
import Home from "./Pages/Home/home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
