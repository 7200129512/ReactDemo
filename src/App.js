//import Home from './App'

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Layout from "./Layout";
import Service from "./Service";
import Test from './Test';
const Appdemo = () => {
    return ( 

        <div className="App">

            <Router>
     <Switch>
     <Route path="/" exact><Layout/></Route>
        <Route path="/home" exact><Home/></Route>
              
                
          <Route path="/blogs" ><Blogs/></Route>
          <Route path="/contact" ><Contact/></Route>
          <Route path="/service" ><Service/></Route>
          <Route path="/test" ><Test/></Route>
          <Route path="*">
           <NoPage></NoPage>
          </Route>   
          </Switch>      
    </Router>
    
        </div>
     );
}

export default Appdemo;