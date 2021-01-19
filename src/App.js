import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
// import AI from "./components/Courses/AI";
// import CoursesHome from "./components/Courses/CoursesHome";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Maps from "./components/pages/Maps";
import Video from "./components/video_components/VideoPage";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/maps" exact component={Maps}/>
                <Route path="/videos" exact component={Video}/>
                {/* <Route path="/all_courses" exact component={CoursesHome}/> */}
                {/* <Route path="/AI" exact component={AI}/> */}
            </Switch>
        </Router>

    );
}

export default App;
