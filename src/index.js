import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Topbar from 'components/topbar/topbar';
import {CurrentUserProvider} from 'contexts/currentUser'
const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <div>
        <Topbar/>
        <Routes/>
        </div>
      </Router>
      </CurrentUserProvider>
  )
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);