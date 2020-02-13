import React from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
import HeadNavigation from "./components/HeadNavigation/HeadNavigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";

const App: React.FC = () =>  {

  return (
    <div className="App">
        <HeadNavigation/>
        <SideNavigation/>
      <ProjectList/>
    </div>
  );
}

export default App;
