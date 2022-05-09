import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background2};
`;

export const JobTitle = styled.p`
    font-size: 2rem;
`;

export const JobDescription = styled.p`
    
`;

export const Company = styled.p`
    color: ${props => props.theme.colors.accent};
    margin-bottom: 2rem;
`;

export const JobPeriod = styled.span`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary2};
`;