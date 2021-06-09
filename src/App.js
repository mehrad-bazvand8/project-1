import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.js";
import Home from './Component/Page/Home';
import SignUp from "./Component/Page/SignUp"
 function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'  exact component={Home}/>
          <Route path='/sign-up' component={SignUp}/>

        </Switch>
      </Router>
    </div>
  );
  }
export default App;
