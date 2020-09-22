import styled from 'styled-components';

interface OverlayProps {
    visibility?: boolean;
}

export const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: ${({visibility}) => visibility ? 'flex': 'none'};
`

export const Wrapper = styled.div`
    ${({theme : {borderRadius,max,breakpoints}}) => `
        border: 1px solid #F2F2F2;
        border-radius: ${borderRadius};
        position: relative;
        background-color: #ffffff;
        padding: 30px 32px 32px;
        ${max(breakpoints.mobile)} {
            width: 100%;
            height: 100%;
            width: calc(100% - 20px);
            padding: 60px 10px 10px;
        }
    `}
`


export const Cross = styled.svg`
    ${({theme : {max,breakpoints}}) => `    
        cursor: pointer;
        width: 14px;
        height: 14px;
        fill: #FF0000;
        position: absolute;
        right: 32px;
        top: 30px;
        z-index: 1;
        ${max(breakpoints.mobile)} {
            top: 60px;
            right: 10px;
        }
    `}    
`;
