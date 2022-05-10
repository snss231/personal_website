import { SectionDivider, Section, SectionTitle } from "../common/CommonStyles";
import styled from "styled-components";

const MyPhoto = styled.img`
    width: 400px;
    border-radius: 50%;
    grid-area: photo;
`;

const AboutContainer = styled.div`
    display: grid;
    grid-template-areas: "photo text";
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "photo"
        "text";
        justify-items: center;
        align-items: center;
    }
`;

const AboutText = styled.div`
    padding: 4rem;
`;

const AboutP = styled.p`
    margin-bottom: 1.5rem;
    font-size: 18px;
    line-height: 2.3rem;
`;

const Accent = styled.span`
    color: ${props => props.theme.colors.accent};
`;

const About = () => (
    <>
    <SectionDivider id="about"/>
    <Section>
        <SectionTitle>About me</SectionTitle>
        <AboutContainer>
            <AboutText>
                <AboutP>
                    Hey there! I'm a Year 3 <Accent>Computer Science</Accent> undergraduate at the National University of Singapore.
                </AboutP>
                <AboutP>
                    Since I was a child, I've always been interested in all things tech. 
                    After discovering my love for programming through a free online introductory CS course (CS50 🙏 ), I've never looked back.
                    There isn't much here yet, but stay tuned.. 😏
                </AboutP>
                <AboutP>
                    My tech interests are <Accent>full-stack software development</Accent>, <Accent>cybersecurity</Accent> and <Accent>computer networks</Accent>.
                </AboutP>
                <AboutP>
                    My personal interests are listening to and performing music, sitcoms/dramas and travelling 🇯🇵 .
                </AboutP>
            </AboutText>
            <MyPhoto src="assets/me.png"/>
        </AboutContainer>
 
    </Section>
    </>
);

export default About;