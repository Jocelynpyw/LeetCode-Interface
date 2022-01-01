// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreens from "./Screens/HomeScreens";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreens} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
