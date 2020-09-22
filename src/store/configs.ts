import {ThunkAction} from 'redux-thunk';
import {ActionCreator} from 'redux';
import {AllActions as MainAllActions} from './Main/actions';
import {MainState} from './Main/state';

export type ApplicationState = {
    main: MainState
}

export type AllActions = MainAllActions;

export type AsyncAction<T> = ActionCreator<
  ThunkAction<Promise<T>, ApplicationState, void, AllActions>
>;

export type ThunkResult<R> = ThunkAction<
  R,
  ApplicationState,
  undefined,
  AllActions
>;


