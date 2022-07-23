import { createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
            <Routes path='/website'>
                <Route path='/home' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
                <Route path= '/*' element={<Navigate to='home' />} />
            </Routes>
        </FirebaseContext.Provider>
    );
}

export default App;
