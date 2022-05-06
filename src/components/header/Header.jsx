import { HomeButton, Container, NavLinks, NavLink, Socials, SocialIcon } from './HeaderStyles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaPoop } from 'react-icons/fa';

const Header = () => (
    <Container>
        <HomeButton><FaPoop/><span>Sean Ng</span></HomeButton>
        <NavLinks>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Experience</NavLink>
        </NavLinks>
        <Socials>
            <SocialIcon href="https://github.com/snss231">
                <AiFillGithub size="3rem"/>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/sean-ng-b70335128">
                <AiFillLinkedin size="3rem"/>
            </SocialIcon>
        </Socials>
    </Container>
)

export default Header;