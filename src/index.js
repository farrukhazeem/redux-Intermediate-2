import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/rootReducer';
import App from './components/App';
import Car from'./containers/car';
import './app.css';
import {BrowserRouter,
  Route
} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<BrowserRouter>
<div>
<Route exact path="/" component={App}></Route>
<Route path="/car/:id" component={Car}></Route>
</div>
</BrowserRouter>
</Provider>

, document.getElementById('root'));
registerServiceWorker();

