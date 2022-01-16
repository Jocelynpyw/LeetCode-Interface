// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreens from "./Screens/HomeScreens";
import SigninScreen from "./Screens/SigninScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreens} />
          <Route path="/login" component={SigninScreen}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
