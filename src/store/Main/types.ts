export enum ACTIONS_TYPES{
    SET_VIEWPORT_WIDTH  = '@@main/SET_VIEWPORT_WIDTH',
    GET_TASK_LIST = '@@main/GET_TASK_LIST',
    UPDATE_TASK = '@@main/UPDATE_TASK',
    CREATE_TASK = '@@main/CREATE_TASK',
    DELETE_TASK = '@@main/DELETE_TASK'
}

export enum STATUS {
    SUCCESS = 'SUCCESS',
    LOADING = 'LOADING',
    ERROR = 'ERROR'
}