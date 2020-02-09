import React from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
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
