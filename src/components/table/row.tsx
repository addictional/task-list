import React from 'react';
import {Row,Cell,Basket,Pancel} from './styles';

export type BaseItem = {
    id: number;
} 


interface Props  {
    item: BaseItem;
    onDelete(item: BaseItem): void;
    onEdit(item: BaseItem): void;
}
const TableRow : React.FC<Props> = ({item,onDelete,onEdit}) => {
    const handleDelete = () => {
        onDelete(item);
    }

    const handleEdit = () => {
        onEdit(item);
    }

    const cells = Object.keys(item).map((prop,index ) => {
        if(prop === 'id') {
            return <Cell key={index}>Задача №{item[prop]}</Cell>
        }
        return <Cell key={index}>{(item as any)[prop]}</Cell>
    })
    return(
        <Row >
            {cells}
            <Cell>
                <Pancel onClick={handleEdit}>
                    <use xlinkHref="/sprite.svg#pancel"/>
                </Pancel>
                <Basket onClick={handleDelete} >
                    <use xlinkHref="/sprite.svg#basket"/>
                </Basket>
            </Cell>
        </Row>
    );    
}

export default React.memo(TableRow,(prevProps,nextProps) => {
    if(prevProps.item.id === nextProps.item.id) {
        return true;
    }
    return false;
});