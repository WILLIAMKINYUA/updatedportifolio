import{BrowserRouter as Router,Switch,Route} from"react-router-dom"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Component/Navbar";
import Service from "./Pages/Service/Service";
import Potifolio from "./Pages/Portifolio/Potifolio";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
   <Router><div className="d-flex flex-column min-vh-100">
    <Navbar/><main className="flex-grow-1">
  <Switch>
    <Route exact path="/"><Home/></Route>
     <Route  path="/about"><About/></Route>
     <Route  path="/service"><Service/></Route>
     <Route  path="/contact"><Contact/></Route>
     <Route  path="/portifolio"><Potifolio/></Route>
    
    </Switch></main> <Footer/></div>
   </Router>
    </div>
  );
}

export default App;