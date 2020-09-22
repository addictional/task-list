import React, { useEffect, useState } from 'react';
import {
    Button,
    Popup
} from '@components/index';
import Task from '@containers/task';

interface Props {
    visibility : boolean;
    onClose(): void;
}

const NewTask : React.FC<Props> = ({visibility,onClose}) => {

    const handleClose = () => {
        if(typeof onClose === 'function') {
            onClose();
        }
    }
    return(
        <Popup visibility={visibility} onClose={handleClose}>
            <Task>
                <Button color='#39B54A'>Создать</Button>
            </Task>
        </Popup>
    );
}

export default React.memo(NewTask,({visibility},nextProps)=>{
    return visibility === nextProps.visibility;
});