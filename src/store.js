import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './components/page-planets/reducers';

const store = createStore(reducer, applyMiddleware(thunk));


export default store;