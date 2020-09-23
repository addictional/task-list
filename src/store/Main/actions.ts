import {Action} from 'redux';
import {ACTIONS_TYPES,STATUS} from './types';
import * as TaskDTO from '@models/TaskDTO';
import configs from '../../config';
import {ThunkResult} from '@store/configs';

const {endpoints : {TASK_API}} = configs;

/** Get list action start */

type GetTaskListActionPayload = {
    items? : TaskDTO.Task[];
    status : STATUS;
    error? : string;
}

interface GetTaskListAction extends Action<ACTIONS_TYPES.GET_TASK_LIST> {
    payload: GetTaskListActionPayload
}

export function getTaskList(payload : GetTaskListActionPayload) : GetTaskListAction {
    return {
        type :  ACTIONS_TYPES.GET_TASK_LIST,
        payload 
    }
}

export  function getTaskListAsync() : ThunkResult<void> {
    return async (dispatch,getState) => {
        try {
            const {status} = getState().main.taskList;
            if(status === STATUS.LOADING) {
                return;
            }
            dispatch(getTaskList({
                status: STATUS.LOADING
            }))
            const {uri,method} = TASK_API.getList;
            const response = await fetch(uri,{
                method
            });
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data : TaskDTO.GetTaskListResonse = await response.json();
            if(data.success) {
                dispatch(getTaskList({
                    status: STATUS.SUCCESS,
                    items: data.data
                }))
            } else {
                throw new Error(data.error);
            }

        } catch (e) {
            dispatch(getTaskList({
                status: STATUS.ERROR,
                error: e.message
            }))
        }
    }
}

/** Get list action end */

/** Create action start */

type CreateTaskActionPayload = {
    status: STATUS,
    title?: string;
    id?: number;
    error?: string;
}

interface CreateTaskAction extends Action<ACTIONS_TYPES.CREATE_TASK> {
    payload: CreateTaskActionPayload
}

export function createTask (payload : CreateTaskActionPayload) : CreateTaskAction {
    return {
        type: ACTIONS_TYPES.CREATE_TASK,
        payload
    }
}

export function createTaskAsync(title :string) : ThunkResult<void> {
    return async (dispatch,getState) => {
        try {
            dispatch(createTask({
                status: STATUS.LOADING
            }));
            const {uri,method} = TASK_API.create;
            const response = await fetch(uri,{
                method,
                body: JSON.stringify({title} as TaskDTO.CreateTaskInput)
            });
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const {error,id,success} : TaskDTO.CreateTaskResponse = await response.json();
            if(success) {
                dispatch(createTask({
                    status: STATUS.SUCCESS,
                    id: id,
                    title
                }))
            } else {
                throw new Error(error);
            }

        } catch (e) {
            dispatch(createTask({
                status: STATUS.ERROR,
                error: e.message
            }))
            throw e;
        } 
    }
}

/** Create action end */

/** Update action start */
type UpdateTaskActionPayload = {
    id: number;
    status: STATUS;
    title?: string;
    error?: string;
}

interface UpdateTaskAction extends Action<ACTIONS_TYPES.UPDATE_TASK> {
    payload: UpdateTaskActionPayload
}

export function updateTask (payload: UpdateTaskActionPayload) : UpdateTaskAction {
    return {
        type: ACTIONS_TYPES.UPDATE_TASK,
        payload
    }
}

export function updateTaskAsync (id: number,title: string) : ThunkResult<void> {
    return async (dispatch,getState)=> {
        const status = getState().main.deleteAction.status;
        if(status === STATUS.LOADING) {
            return;
        }

        try {
            dispatch(updateTask({
                id,
                status: STATUS.LOADING
            }));
            const {uri,method} = TASK_API.update;
            const response = await fetch(uri(id),{
                method,
                body: JSON.stringify({title} as TaskDTO.UpdateTaskInput)
            });
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data : TaskDTO.UpdateTaskResponse = await response.json();
            if(data.success) {
                dispatch(updateTask({
                    id,
                    status: STATUS.SUCCESS,
                    title
                }))
            } else {
                throw new Error(data.error);
            }

        } catch (e) {
            dispatch(updateTask({
                id,
                status: STATUS.ERROR,
                error: e.message
            }))
            throw e;
        } 

    }
}

/** Update action end */

/** Delete action start */

type DeleteActionPayload  = {
    id: number;
    status: STATUS;
    error?: string;
}

interface DeleteTaskAction extends Action<ACTIONS_TYPES.DELETE_TASK> {
    payload: DeleteActionPayload
}

export function deleteTask(payload : DeleteActionPayload) : DeleteTaskAction {
    return {
        type :  ACTIONS_TYPES.DELETE_TASK,
        payload 
    }
}

export function deleteTaskAsync(id :number) : ThunkResult<void> {
    return async (dispatch) => {
        try {
            dispatch(deleteTask({
                id,
                status: STATUS.LOADING
            }));
            const {uri,method} = TASK_API.delete;
            const response = await fetch(uri(id),{
                method
            });
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data : TaskDTO.DeleteTaskResponse = await response.json();
            if(data.success) {
                dispatch(deleteTask({
                    status: STATUS.SUCCESS,
                    id
                }))
            } else {
                throw new Error(data.error);
            }

        } catch (e) {
            dispatch(deleteTask({
                id,
                status: STATUS.ERROR,
                error: e.message
            }))
        } 
    }
}

/** Delete action  end */



export type AllActions =  GetTaskListAction | DeleteTaskAction | CreateTaskAction | UpdateTaskAction;