
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Button,
    Title,
    MainWrapper,
} from '@components/index';
import Task from '@containers/task'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Container,ButtonWrapper} from './styles';
import { useThunkDispatch } from '@store/index';
import { useSelector } from 'react-redux';
import Actions from '@store/allActions';
import { Task as ITask} from '@models/TaskDTO';


const TaskView : React.FC = () => {
    let { id } = useParams<{id: string}>();
    const dispatch = useThunkDispatch();
    const items = useSelector(state => state.main.taskList.items);
    const [title,setTitle] = useState('');
    const cachedTask = useRef(null as null | ITask);
    const [edit,setEdit] = useState(false);
    

    useEffect(()=>{
        if(items.length === 0) {
            dispatch(Actions.Main.getTaskListAsync())
        } else {
            const item = items.find((item) => item.id === parseInt(id));
            if(item) {
                cachedTask.current = item;
                setTitle(item.title);
            }
        }
    },[items])// eslint-disable-line react-hooks/exhaustive-deps


    const handleBlur = useCallback(()=>{
        const prevTitle = (cachedTask.current as ITask).title;
        if(title === prevTitle) {
            setEdit(false);
        }
    },[title]);

    const handleFocus = useCallback(()=>{
        setEdit(true);
    },[])

    const handleChange  = useCallback((value : string)=>{
        setTitle(value);
    },[])


    const handleSubmit  = useCallback(async (value : string)=>{
        if(!edit) {
            return;
        }
        const {id,title} = (cachedTask.current as ITask)
        try {
            await dispatch(Actions.Main.updateTaskAsync(id,value));
            (cachedTask.current as ITask).title = title;
        } catch (e) {
            setTitle(title);
            throw e;
        } finally {
            setEdit(false);
        }
    },[edit])// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <MainWrapper>
            <Title>Задача №{id}</Title>
            <Container>
                <Task description={title} align="left" onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} onSubmit={handleSubmit}>
                    <ButtonWrapper>
                        {edit ? <Button color='#39B54A'>изменить</Button> : <Link to="/"><Button color='#0071BC'>Вернуться в список</Button></Link>}
                    </ButtonWrapper>
                </Task>
            </Container>
        </MainWrapper>
    );
}

export default TaskView;