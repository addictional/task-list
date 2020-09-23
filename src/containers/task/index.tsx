import React from 'react';
import {Input} from '@components/index';
import {Wrapper,ChildrenWrapper} from './styles';
import {Formik,Form,FormikHelpers} from 'formik';
import Actions from '@store/allActions';
import { useThunkDispatch } from '@store/index';


export interface FormikValues {
    title: string;
}

interface Props {
    description?: string;
    disabled? : boolean;
    error?: string;
    align?: string;
    onSuccess?(): void;
}


const Task : React.FC<Props> = ({description = '',disabled = false,children,align = 'right',onSuccess}) => {
    const dispatch = useThunkDispatch();


    const initialValues : FormikValues =  {
        title: description
    };
    const validate = ({title} : FormikValues) => {
        const errors = {} as any;
        if(title.length === 0) {
            errors.title = 'Заголовок не может быть пустым';
        }
        return errors;
    }

    const handleSubmit = async ({title} : FormikValues,actions : FormikHelpers<FormikValues>)=> {
        try{
            await dispatch(Actions.Main.createTaskAsync(title));
            if(typeof onSuccess === 'function') {
                onSuccess();
            }
        } catch (e) {
            actions.setErrors({title: e.message});
        }
    }

    return (
        <Wrapper>
            <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit} validate={validate} >
                {({ errors }) => (
                    <Form>
                        <Input disabled={disabled} label="Краткое описание" error={errors.title} name="title" id="title"/>
                        <ChildrenWrapper align={align}>{children}</ChildrenWrapper>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default  Task;