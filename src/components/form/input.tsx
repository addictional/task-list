import React,{InputHTMLAttributes} from 'react';
import {
    InputWrapper,
    InputField,
    InputLabel,
    InputErrorDescription
} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

const Input : React.FC<Props> = (props) => {
    const {error,label} = props;
    return (
        <InputWrapper>
            {label && <InputLabel htmlFor={props.id}>{label}</InputLabel>}
            <InputField {...props}/>
            {error && <InputErrorDescription>{error}</InputErrorDescription>}
        </InputWrapper>
    );
}


export default Input;