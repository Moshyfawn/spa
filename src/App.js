import React, { Component } from 'react';
// this.props.location.history
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';

import Router from './router';
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  };
};

export default App;
