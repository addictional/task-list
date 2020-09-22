
import React, { useEffect, useState } from 'react';
import {
    Button,
    Title,
    MainWrapper,
} from '@components/index';
import Task from '@containers/task'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Container} from './styles';
import { useThunkDispatch } from '@store/index';
import { useSelector } from 'react-redux';
import Actions from '@store/allActions';


const TaskView : React.FC = () => {
    let { id } = useParams<{id: string}>();
    const dispatch = useThunkDispatch();
    const items = useSelector(state => state.main.taskList.items);
    const [title,setTitle] = useState('');

    useEffect(()=>{
        if(items.length === 0) {
            dispatch(Actions.Main.getTaskListAsync())
        } else {
            const item = items.find((item) => item.id === parseInt(id));
            if(item) {
                setTitle(item.title);
            }
        }
    },[items])
    return (
        <MainWrapper>
            <Title>Задача №{id}</Title>
            <Container>
                <Task description={title} disabled align="left">
                    <Link to="/"><Button color='#0071BC'>Вернуться в список</Button></Link>
                </Task>
            </Container>
        </MainWrapper>
    );
}

export default TaskView;