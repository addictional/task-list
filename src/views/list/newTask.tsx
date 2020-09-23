import React, { useCallback} from 'react';
import {
    Button,
    Popup
} from '@components/index';
import Task from '@containers/task';
import Actions from '@store/allActions';
import { useThunkDispatch } from '@store/index';

interface Props {
    visibility : boolean;
    onClose(): void;
}

const NewTask : React.FC<Props> = ({visibility,onClose}) => {
    const dispatch = useThunkDispatch();


    const handleSubmit = useCallback(async (title: string)=>{
        await dispatch(Actions.Main.createTaskAsync(title));
    },[])

    const handleClose = useCallback(() => {
        if(typeof onClose === 'function') {
            onClose();
        }
    },[onClose])

    
    return(
        <Popup visibility={visibility} onClose={handleClose}>
            <Task onSuccess={handleClose} onSubmit={handleSubmit}>
                <Button color='#39B54A'>Создать</Button>
            </Task>
        </Popup>
    );
}

export default React.memo(NewTask,({visibility},nextProps)=>{
    return visibility === nextProps.visibility;
});