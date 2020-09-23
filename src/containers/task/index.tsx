import React from 'react';
import {Input} from '@components/index';
import {Wrapper,ChildrenWrapper} from './styles';
import {Formik,Form,FormikHelpers} from 'formik';


export interface FormikValues {
    title: string;
}

interface Props {
    description?: string;
    disabled? : boolean;
    error?: string;
    align?: string;
    onSuccess?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChange?(value: string): void;
    onSubmit?(title: string): Promise<void>
}


const Task : React.FC<Props> = ({description = '',disabled = false,children,align = 'right',onSuccess,onFocus,onBlur,onSubmit,onChange}) => {

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
            if(typeof onSubmit === 'function')  {
                await onSubmit(title);
            }
            if(typeof onSuccess === 'function') {
                onSuccess();
            }
        } catch (e) {
            actions.setErrors({title: e.message});
        }
    }

    const handleFocus = () => {
        if(typeof onFocus === 'function') {
            onFocus();
        }
    }


    const handleBlur = () => {
        if(typeof onBlur === 'function') {
            onBlur();
        }
    }

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(typeof onChange === 'function') {
            onChange(e.target.value);
        }
    }

    return (
        <Wrapper>
            <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit} validate={validate} >
                {({ errors }) => (
                    <Form>
                        <Input onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled} label="Краткое описание" error={errors.title} name="title" id="title"/>
                        <ChildrenWrapper align={align}>{children}</ChildrenWrapper>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default  Task;