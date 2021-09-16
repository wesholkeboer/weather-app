import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import FiveDayTemp from "./components/FiveDayTemp";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/fivedaytemp" exact>
            <FiveDayTemp />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
