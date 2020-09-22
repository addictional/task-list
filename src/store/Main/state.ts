import {Task} from '@models/TaskDTO';
import {STATUS} from './types';
export interface MainState {
    taskList : {
        items : Task[]
        status: STATUS
        error: string
    },

    updateAction: {
        id: number | null;
        status: STATUS;
    },
    deleteAction: {
        id: number | null;
        status: STATUS;
    },
    createAction: {
        status: STATUS;
    },
}


export const defaultState : MainState = {
    taskList: {
        items: [],
        status: STATUS.SUCCESS,
        error: ''
    },
    updateAction: {
        id: null,
        status: STATUS.SUCCESS
    },
    deleteAction: {
        id: null,
        status: STATUS.SUCCESS
    },
    createAction: {
        status: STATUS.SUCCESS
    },
}