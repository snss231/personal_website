import { HomeButton, Container, NavLinks, NavLink, Socials, SocialIcon } from './HeaderStyles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaCat } from 'react-icons/fa';


const Header = () => (
    <Container>
        <HomeButton><FaCat/><span>Sean Ng</span></HomeButton>
        <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#experience">Skills</NavLink>
            <NavLink href="#experience">Contact</NavLink>
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