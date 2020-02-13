import React from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
import HeadNavigation from "./components/HeadNavigation/HeadNavigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import ProjectsInfo from "./components/ProjectsInfo/ProjectsInfo";

const App: React.FC = () =>  {

  return (
    <div className="App">
        <HeadNavigation/>
        <SideNavigation/>
        <ProjectsInfo/>
        <ProjectList/>
    </div>
  );
}

export default App;
