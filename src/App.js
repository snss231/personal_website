import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Competencies from './components/competencies/Competencies';
import Experience from './components/experience/Experience';
import Theme from './styles/Theme';
import styled from 'styled-components'
import Hero from './components/hero/Hero';

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

function App() {
  return (
    <Theme>
    <Container>
        <Header/>
        <main>
        <About/>
        <Hero/>
        <Projects/>
        <Competencies/>
        <Experience/>
        </main>
    </Container>
    </Theme>
  );
}

export default App;
