// store/index.js

// import { createStore } from 'redux';
// import rootReducer from '../reducer';
import { createStore, combineReducers } from 'redux';
import courseReducer from '../reducer/courseReducer';
//const store = createStore(rootReducer);
const rootReducer = combineReducers({
    course: courseReducer
  });
  
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store;