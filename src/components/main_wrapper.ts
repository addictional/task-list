import styled from 'styled-components';

export const MainWrapper = styled.main`
    margin: 40px 0;
    padding: 0 64px;
    ${({theme : {max,breakpoints}}) => `
        ${max(breakpoints.tablet)} {
            padding: 0 30px;
        }
        ${max(breakpoints.mobile)} {
            padding: 0 10px;
        }
    `}
`;

export default MainWrapper;