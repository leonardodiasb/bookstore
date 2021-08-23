import BookSection from "./books/BookSection";
import Navbar from './Navbar';
import Categories from './categories/Categories'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <BookSection />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
