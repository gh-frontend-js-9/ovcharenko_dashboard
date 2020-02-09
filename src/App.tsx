import React from 'react';
import './App.css';
import ProjectLine from "./components/ProjectLine/ProjectLine";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectButton from "./components/ProjectButton/ProjectButton";
import HeadNavigation from "./components/HeadNavigation/HeadNavigation";

const App: React.FC = () =>  {

  return (
    <div className="App">
        <HeadNavigation/>
      <ProjectList/>
    </div>
  );
}

export default App;
