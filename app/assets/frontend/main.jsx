import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Follow from './components/Follow';

import { Router, hashHistory, Route, Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

let documentReady = () => {
  if (document.getElementById('react')) {
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path='/' component={Index} />
          <Route path='follow' component={Follow} />
        </Route>
      </Router>
      , document.getElementById('react'));
  }
};

$(documentReady);
