import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/">
      <div className="App">
      <Home/>
    </div>
     </Route>
    </Switch>
    </Router>
  );
}

export default App;
