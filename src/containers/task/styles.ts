import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 462px;
    ${({theme :{max,breakpoints}}) => `
        ${max(breakpoints.mobile)} {
            width: 100%;
        }
    `}
`;
interface Props {
    align: string;
}
export const ChildrenWrapper = styled.div<Props>`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content:${({align}) => align === 'right' ? 'flex-end' : 'flex-start'};
    ${({theme :{max,breakpoints}}) => `
        ${max(breakpoints.mobile)} {
            justify-content: center;
        }
    `}
`;