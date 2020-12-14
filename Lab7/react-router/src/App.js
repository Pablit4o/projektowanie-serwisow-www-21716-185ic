import Nav from './Nav';
import Lists from './Lists';
import ProfileCard from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
    <Typography variant='h3' align='center' color="primary">
      Hello There
    </Typography>
    <Typography variant='h4' align='center' color='textSecondary'>
      Welcome on my site 👋
    </Typography>
  </div>
)

