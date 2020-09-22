import styled from 'styled-components';

interface ButtonProps {
    color: string;
}
export const Button = styled.button<ButtonProps>`
    ${({color,theme : {borderRadius,colors,max,breakpoints}}) => `
        min-width: 148px;
        border: 1px solid ${color};
        border-radius: ${borderRadius};
        height: 35px;
        color: ${colors.fonts.main};
        background-color: ${colors.main};
        padding: 0 25px;
        text-align: center;
        transition: background-color 200ms,color 200ms;
        cursor: pointer;
        &:hover {
            color: ${colors.fonts.hover};
            background-color: ${color};
        }
        &:focus {
            color: ${colors.fonts.hover};
            background-color: ${color};
        }
        ${max(breakpoints.mobile)} {
            min-width: 123px;
        }
    `}
`;

