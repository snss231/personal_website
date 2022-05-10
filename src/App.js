import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Competencies from './components/competencies/Competencies';
import Experience from './components/experience/Experience';
import Theme from './styles/Theme';
import styled from 'styled-components'
import Hero from './components/hero/Hero';
import Animation from './components/hero/Animation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

function App() {
  return (
    <Theme>
    <Header/>
    <Container>
      <main>
      <HeroContainer>
        <Hero/>
        <Animation/>
      </HeroContainer>
      <About/>
      <Projects/>
      <Competencies/>
      <Experience/>
      </main>
    </Container>
    </Theme>
  );
}

export default App;
