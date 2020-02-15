import React from 'react';
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import ProjectDashboard from "./components/ProjectDashboard/ProjectDashboard";

const App: React.FC = () =>  {

  return (
    <div className="App">
        <Navigation/>
    </div>
  );
}

export default App;
