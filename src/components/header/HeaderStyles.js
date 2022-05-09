import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    position: sticky;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1rem;
    padding: 2rem;
`;

export const HomeButton = styled.a`
    display: flex;
    align-content: center;
    grid-area: 1 / 1 / 1 / 2;
    padding: 1rem;
    gap: 1rem;
    &:hover {
        cursor: pointer;
    };
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    grid-area: 1 / 2 / 1 / 4;
`;

export const NavLink = styled.a`
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.75);
    &:hover {
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    };
    transition: 0.3s;
`;

export const Socials = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-area: 1 / 5 / 1 / 5;
`;

export const SocialIcon = styled.a`
    color: white;
    border-radius: 50px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    };
    transition: 0.3s;
`;