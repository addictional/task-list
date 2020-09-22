import React from 'react';
import './css/index.css';
import {ThemeProvider} from 'styled-components';
import {MainTheme} from './theme/defaultTheme';
import ListView from '@views/list';
import store from '@store/index';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TaskView from '@views/task';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={MainTheme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" render={()=> <ListView/>}/>
              <Route path="/task/:id" render={()=> <TaskView/>}/>
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
