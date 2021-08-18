import "./App.css";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router";
import { HomeTemplate } from "./templates/HomeTamplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
        <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
        <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
        <Route path="/login" exact Component={Login}></Route>
        <Route path="/register" exact Component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;
