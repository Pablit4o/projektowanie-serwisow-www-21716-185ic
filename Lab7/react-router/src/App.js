import './App.css';
import Nav from './Nav';
import ProfileCard from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={ProfileCard} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
