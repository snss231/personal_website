import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundheader};
    display: flex;
    justify-content: center;
    width: 100%;
    position: sticky;
    height:100%
    top: 0px;
`;

export const Nav = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "home nav nav blank socials";
    grid-column-gap: 1rem;
    padding: 1.5rem;
    width: 1280px;
    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-areas: "home nav nav nav socials"
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: "nav nav nav socials"
    }
`;

export const HomeButton = styled.a`
    display: flex;
    align-content: center;
    grid-area: home;
    padding: 0.5rem;
    gap: 1rem;
    &:hover {
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    grid-area: nav;
`;

export const NavLink = styled.a`
    font-size: 18px;
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
    grid-area: socials;
`;

export const SocialIcon = styled.a`
    color: white;
    border-radius: 50px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
    transition: 0.3s;
`;