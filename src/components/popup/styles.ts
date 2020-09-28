import styled from 'styled-components';


export const TransitionName = 'modal'

export const Overlay = styled.div`
    ${({theme : {max,breakpoints}}) => `
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        z-index: 3;
        justify-content: center;
        align-items: center;
        display: flex;
        transition: opacity .2s, backdrop-filter .2s;
        ${max(breakpoints.mobile)} {
            align-items: flex-start;
        }
        &.${TransitionName}-exited {
            visibility: hidden;
            opacity: 0;
        }
        &.${TransitionName}-exiting {
            opacity: 0;
        }
        &.${TransitionName}-entering {
            opacity: 1;
        }
    `}
`

export const Wrapper = styled.div`
    ${({theme : {borderRadius,max,breakpoints}}) => `
        border: 1px solid #F2F2F2;
        border-radius: ${borderRadius};
        position: relative;
        background-color: #ffffff;
        padding: 30px 32px 32px;
        transition: transform 200ms ease-in-out;
        ${max(breakpoints.mobile)} {
            width: calc(100% - 20px);
            padding: 18px 10px 10px;
            border-radius:  0;
        }
        &.${TransitionName}-exited {
            transform: translateY(calc(-50vh - 50%));
        }
        &.${TransitionName}-exiting {
            transform: translateY(calc(-50vh - 50%));
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
        transition: transform 200ms;
        &:hover {
            transform: scale(1.1);
        }
        ${max(breakpoints.mobile)} {
            top: 18px;
            right: 10px;
        }
    `}    
`;


export const Background = styled.div`
    transition: opacity .15s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: #000;
    transition: opacity 200ms;
    opacity: 0.5;
    &.${TransitionName}-exited {
        visibility: hidden;
        opacity: 0;
    }
    &.${TransitionName}-exiting {
        opacity: 0;
    }
    &.${TransitionName}-entering {
        opacity: 0.5;
    }
`;
