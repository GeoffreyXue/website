import { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
// import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './environments/Config';

console.log("initializing...");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseContext = createContext(app);

function App() {
    return (
        <FirebaseContext.Provider value={app}>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                {/* <Route exact path='/contact' component={Contact} /> */}
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/resume' component={Resume} />
            </Switch>
        </FirebaseContext.Provider>
    );
}

export default App;
