import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import {applyMiddleware, createStore} from "redux";
import Navigation from "./components/Navigation/Navigation";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () =>  {

  return (
     <Provider store={store}>
    <div className="App">
        <Navigation/>
    </div>
     </Provider>
  );
};

export default App;
