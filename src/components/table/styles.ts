import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    text-align: left;
    table-layout: fixed;
    border: 1px solid #E6E6E6;
    border-radius: ${({theme : {borderRadius}}) => borderRadius};
`;

export const Row = styled.tr`
    vertical-align: middle;
    & > td {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    td:nth-child(1) {
        width: 20%;
    }
    td:nth-child(2) {
    }
    td:last-child {
        width: 83px;
        & > svg:first-child {
            margin-right: 28px;
        }
    }
    ${({theme : {max,breakpoints}}) => `
        ${max(breakpoints.mobile)} {
            td:last-child {
                width: 66px;
                & > svg:first-child {
                    margin-right: 16px;
                }
            }
        }
    `}  
`;

interface CellProps {
    width?: string;
}

export const Cell = styled.td<CellProps>`
    padding: 16px 0 16px 21px;
    border: 1px solid #E6E6E6;
    line-height: 17px;
    vertical-align: middle;
    ${({theme : {max,breakpoints}}) => `
        ${max(breakpoints.tablet)} {
            padding: 16px 0 16px 12px;
        }
        ${max(breakpoints.mobile)} {
            padding: 16px 5px 16px 9px;
        }
    `}    
`;

export const Basket = styled.svg`
    width: 18px;
    height: 22px;
    fill: #F4583F;
    cursor: pointer;
    transition: fill .2s, transform .2s; 
    &:hover {
        fill: #1890ff;
        transform: scale(1.2);
    }
`;

export const Pancel = styled.svg`
    width: 22px;
    height: 22px;
    fill: #666666;
    cursor: pointer;
    transition: fill .2s, transform .2s; 
    &:hover {
        fill: #1890ff;
        transform: scale(1.2);
    }
`;