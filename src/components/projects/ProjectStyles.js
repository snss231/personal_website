import styled from 'styled-components';

export const ProjectCase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ProjectContainer = styled.div`
    display: grid;
    background-color: ${props => props.theme.colors.background2};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "text image"
        "links stack";
    border-radius: 10px;
    padding: 3rem;
    width: 100%;
    box-shadow: 1px 1px 6px #101010;
`;

export const TextContainer = styled.div`
    grid-area: text
`;

export const ProjectTitle = styled.h3`
    font-size: 3rem;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.accent};
`;

export const ProjectDescription = styled.p`
    padding-right: 1rem;
    padding-top: 1rem;
`;

export const ProjectStack = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    grid-area: stack;
    font-size: 4rem;
    margin-top: 1rem;
`;

export const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ProjectLink = styled.a`
    color:${props => props.theme.colors.primary};
    background: #6b3030;
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    &:hover{
        background: #801414;
    }
    transition: 0.5s;
    align-self: center;
`;

export const Img = styled.img`
    object-fit: contain;
    overflow: hidden;
    width: 100%;
    grid-area: image;
    align-self:center;
`;