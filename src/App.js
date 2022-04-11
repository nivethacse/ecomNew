import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ScrollToTop from './components/ScrollToTop'
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/login'><Login /></Route>
          <Route exact path='/signup'><Signup /></Route>
          <Route exact path='/products'><Products /></Route>
          <Route exact path='/products/:id'><ProductDetail /></Route>
          <Route exact path='/cart'><Cart /></Route>
          <Route exact path='/blog'><Blog/></Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
