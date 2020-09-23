import React, { useCallback, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useThunkDispatch} from '@store/index'
import Actions from '@store/allActions';
import {
    Button,
    Title,
    MainWrapper,
    Table,
} from '@components/index';
import {TitleWrapper} from './styles';
import {useHistory} from 'react-router-dom';
import NewTask from './newTask';


const {Main} = Actions;


const List : React.FC = ()=>{
    const [popup,setPopup] = useState(false);
    const {taskList: {items}} = useSelector(({main}) => main);
    const history = useHistory();
    const dispatch = useThunkDispatch();

    useEffect(()=> {
        dispatch(Main.getTaskListAsync());
    },[dispatch]);

    const openPopup = ()=> {
        setPopup(true);
    }

    const closePopup = useCallback(()=> {
        setPopup(false);
    },[])
    
    const handleDelete = useCallback((value : any) => {
        dispatch(Main.deleteTaskAsync(value.id));
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleEdit = useCallback((value : any) => {
        //temporate redirect to detail page
        history.push(`/task/${value.id}`);
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <MainWrapper>
            <TitleWrapper> 
                <Title>Список задач</Title>
                <Button onClick={openPopup} color='#39B54A'>Добавить</Button>
            </TitleWrapper>
            <Table onDelete={handleDelete} onEdit={handleEdit} items={items}/>
            <NewTask onClose={closePopup} visibility={popup} />
        </MainWrapper>
    )
}

export default List;