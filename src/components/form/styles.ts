import styled from 'styled-components';
import {Field} from 'formik';

export const InputWrapper = styled.div`
    position: relative;
    text-align: left;
`;


export const InputField = styled(Field)`
    ${({theme : {colors,borderRadius}}) => `
        color: ${colors.fonts.main};
        background-color: ${colors.input.background};
        border: 1px solid transparent;
        border-radius: ${borderRadius};
        transition: background-color .2s, color .2s;
        height: 40px;
        width: calc(100% - 12px);
        padding-left: 10px;
        &:focus {
            border: 1px solid #E6E6E6;
            outline: none;
            background-color: ${colors.input.backgroundFocus};
        }
    `}
`;

export const InputLabel = styled.label`
    margin-bottom: 12px;
    line-height: 16px;
    display: block;
`

export const InputErrorDescription = styled.span`
    ${({theme : {colors}}) => `
        color: ${colors.fonts.error};
        background-color: transparent;
        font-size: 12px;
        line-height: 14px;
        position: absolute;
        bottom: -20px;
    `}
`;