import Nav from './Nav';
import Lists from './Lists';
import ProfileCard from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <Router> 
        <Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={ProfileCard} />
            <Route path="/list">
              <Lists name="Lista" id={0} />
            </Route>
          </Switch>
        </Nav>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

