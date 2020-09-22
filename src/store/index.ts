import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
    Reducer,
} from 'redux';
import {useDispatch} from 'react-redux';
import {ApplicationState,AllActions} from './configs'
import MainReducer from './Main/reducer';


import thunk, {ThunkMiddleware} from 'redux-thunk';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer : Reducer<ApplicationState,AllActions> = combineReducers({
    main : MainReducer
})

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk as ThunkMiddleware<ApplicationState, AllActions>),
    ),
);

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();

export default store;