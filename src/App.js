import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoveYou from './Component/LoveYou/LoveYou';
import LoveToo from './Component/LoveYou/LoveToo/LoveToo';
import NoLove from './Component/NoLove/NoLove';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <LoveYou></LoveYou> </Route>
        <Route path="/loveUToo"> <LoveToo></LoveToo> </Route>
         <Route path="/sayOfcourse" > <NoLove></NoLove> </Route>
      </Switch>
    </Router>
  );
}

export default App;
