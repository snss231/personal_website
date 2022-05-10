import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Competencies from './components/competencies/Competencies';
import Experience from './components/experience/Experience';
import Theme from './styles/Theme';
import styled from 'styled-components'
import Hero from './components/hero/Hero';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

function App() {
  return (
    <Theme>
    <Header/>
    <Container>
      <main>
      <Hero/>
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
