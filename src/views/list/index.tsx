import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useThunkDispatch} from '@store/index'
import Actions from '@store/allActions';
import {
    Button,
    Title,
    MainWrapper,
    Table,
} from '@components/index';
import {FormikValues} from '../../containers/task';
import {TitleWrapper} from './styles';
import {useHistory} from 'react-router-dom';
import NewTask from './newTask';


const {Main} = Actions;


const List : React.FC = ()=>{
    const [popup,setPopup] = useState(false);
    const {taskList: {items,error}} = useSelector(({main}) => main);
    const history = useHistory();
    const dispatch = useThunkDispatch();

    useEffect(()=> {
        dispatch(Main.getTaskListAsync());
    },[dispatch]);

    const openPopup = ()=> {
        setPopup(true);
    }

    const closePopup = ()=> {
        setPopup(false);
    }
    
    const handleDelete = (value : any) => {
        dispatch(Main.deleteTaskAsync(value.id));
    }

    const handleEdit = (value : any) => {
        //temporate redirect to detail page
        history.push(`/task/${value.id}`);
    }

    
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