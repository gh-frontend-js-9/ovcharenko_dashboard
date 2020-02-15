import React from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
import HeadNavigation from "./components/HeadNavigation/HeadNavigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import ProjectsInfo from "./components/ProjectsInfo/ProjectsInfo";
import SignUp from "./components/SignUp/SignUp";
import LoginForm from "./components/LoginForm/LoginForm";
import ResetForm from "./components/ResetForm/ResetForm";
import Navigation from "./components/Navigation/Navigation";

const App: React.FC = () =>  {

  return (
    <div className="App">
        {/*<HeadNavigation/>
        <SideNavigation/>
        <ProjectsInfo/>
        <ProjectList/>*/}
        <Navigation/>
    </div>
  );
}

export default App;
