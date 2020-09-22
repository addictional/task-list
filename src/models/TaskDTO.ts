
export interface GetTaskListInput {}

export interface Task {
    id: number;
    title: string;
}

export interface GetTaskListResonse {
    data : Task[];
    length: number;
    success: boolean;
    error: string;
}


export interface CreateTaskInput {
    title : string;
}
export interface CreateTaskResponse {
    id: number; 
    success: boolean; 
    error: string;
}

export interface UpdateTaskInput {
    title : string;
}
export interface UpdateTaskResponse {
    success: boolean; 
    error: string;
}


export interface DeleteTaskInput {}
export interface DeleteTaskResponse {
    success: boolean; 
    error: string;
}
