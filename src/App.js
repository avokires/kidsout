import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import ChatPage from './pages/ChatPage';
import { IconMap } from './components/Icon';
import Header from './components/Header';

const NotFoundPage = () => <p>404. The requested page is not found.</p>;


const App = props => (
  <Provider store={props.store}>
    <Router>
      <div id="router">
        <IconMap />
        <Header />
        <Switch>
          <Route path="/" component={ChatPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
