import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Maps from './components/pages/Maps';
import VirtualTour from './components/pages/VirtualTour';
import AI from './components/Courses/AI';
import Video from './components/VideoComponents/VideoPage'
import CoursesHome from './components/Courses/CoursesHome';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/maps' exact component={Maps} />
        <Route path='/tour' exact component={VirtualTour} />
        <Route path='/videos' exact component={Video} />
        <Route path='/all_courses' exact component={CoursesHome} />
        <Route path='/AI' exact component={AI}/>
      </Switch>
    </Router>
   
  );
}

export default App;
