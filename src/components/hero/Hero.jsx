import { Section, SectionTitle, SectionText } from "../common/CommonStyles";
import Animation from "./Animation";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 98vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 2rem;
  }
`;
const Hero = () => (
    <HeroContainer>
        <Section>
            <SectionTitle>
                Hi!<br/>I'm Sean.
            </SectionTitle>
            <SectionText>
                I like to make stuff on the computer.
            </SectionText>
        </Section>
        <Animation/>
    </HeroContainer>
);

export default Hero;