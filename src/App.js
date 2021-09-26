import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Navigation/>
        <Switch>
            {/* <Route exact path='/website#' component={Home} />
            <Route exact path='/website#contact' component={Contact} />
            <Route exact path='/website#projects' component={Projects} /> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects' component={Projects} />
        </Switch>
    </>
  );
}

export default App;
