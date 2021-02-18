import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  NewsContainer,
  Modal
} from './components';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <NewsContainer/>
          </Route>
          <Route
            path="/news/:id"
            render={({match}) => {
              const {id} = match.params;
              return (
                <>
                  <NewsContainer/>
                  <Modal target='news' params={id}/>
                </>
              )
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
