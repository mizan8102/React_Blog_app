import Navbar from "./Navbar";
import Home from "./Components/Home";
import Test from "./Components/Test";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import Notfound from "./Components/Notfound";
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
             <Home titldfe="All Blogs" />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
         
        </Switch>
         
      </div>
     
      <Test />
    </div>
    </Router>
    
  );
}

export default App;
