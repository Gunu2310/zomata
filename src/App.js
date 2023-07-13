
import Home from "./pages/home";
import About from "./pages/about";
// import Headers from './component/headers';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return(
    <Router>
     {/* <Headers/> */}
      <Switch>
         <Route exact path='/'>
           <About/>
        </Route>  
         {/* <Route path='/about'>
          <About/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
