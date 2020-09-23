import {Reducer} from 'redux';
import {AllActions} from './actions';
import {ACTIONS_TYPES,STATUS} from './types';
import {MainState,defaultState} from './state';




const reducer : Reducer<MainState,AllActions> = (state = defaultState,action) => {
    switch(action.type) {
        case ACTIONS_TYPES.GET_TASK_LIST: {
          const payload = action.payload;
          const taskList = state.taskList;
          return {...state, taskList : {
            ...taskList,...payload
          }}
        }

        case ACTIONS_TYPES.CREATE_TASK: {
            const payload = action.payload;
            const taskList = state.taskList;
            if(!payload.error && payload.status === STATUS.SUCCESS) {
                taskList.items.push({
                    id: payload.id as number,
                    title: payload.title as string,
                })
            }
            if(payload.error) {
                state.taskList.error = payload.error;
            }
            return {...state, taskList : {...taskList,items: taskList.items},createAction: {...state.createAction,...payload}};
        }

        case ACTIONS_TYPES.UPDATE_TASK: {
            const payload = action.payload;
            const taskList = state.taskList;
            if(payload.status === STATUS.SUCCESS) {
                const index = taskList.items.findIndex(({id}) => id === payload.id);
                if(index !== -1 && payload.title) {
                    taskList.items[index].title = payload.title; 
                }
            }
            if(payload.error) {
                state.taskList.error = payload.error;
            }
            return {...state,taskList: {...taskList,items: [...taskList.items]},updateAction: {...state.updateAction,...payload}}
        }

        case ACTIONS_TYPES.DELETE_TASK: {
            const payload = action.payload;
            const taskList = state.taskList;
            if(payload.status === STATUS.SUCCESS) {
                const index = taskList.items.findIndex(({id}) => id === payload.id);
                if(index !== -1) {
                    taskList.items.splice(index,1);
                }
            }
            if(payload.error) {
                state.taskList.error = payload.error;
            }
            return {...state,taskList: {...taskList,items: [...taskList.items]},deleteAction: {...state.deleteAction,...payload}}
        }

        default: {
            return {...state};
        }
    }
}

export default reducer;

