import styled from 'styled-components';

export const Title = styled.h1`
    text-align: left;
    font-size: 32px;
    line-height: 37px;
    font-family: Roboto-Bold;
    ${({theme : {max,breakpoints}}) => `
        ${max(breakpoints.mobile)} {
            font-size: 26px;
        }
    `}   
`;

export default Title;