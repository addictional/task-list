import React, { useCallback } from 'react';
import {Table} from './styles';
import Row,{BaseItem} from './row';

export type TableDeleteHandler<T = BaseItem> =  {
    (values : T): void;
}

export type TableEditHandler<T = BaseItem> =  {
    (values : T): void;
}

interface Props {
    items: Array<BaseItem>;
    onDelete?: TableDeleteHandler
    onEdit?: TableEditHandler
}

const CustomTable : React.FC<Props> = ({items,onDelete,onEdit}) => {
    const handleDelete = useCallback((item)=>{
        if(typeof onDelete === 'function') {
            onDelete(item);
        }
    },[])
    const handleEdit = useCallback((item)=>{
        if(typeof onEdit === 'function') {
            onEdit(item);
        }
    },[])
    const Rows = items.map(item => {
        return <Row onDelete={handleDelete} onEdit={handleEdit} item={{...item}} key={item.id}/>
    })
    
    return (
        <Table>
            <tbody>
                {Rows}
            </tbody>
        </Table>
    );
};
export default React.memo(CustomTable);