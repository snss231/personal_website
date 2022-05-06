import './App.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
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
        <Hero/>
        </main>
        <Projects/>
    </Container>
    </Theme>
  );
}

export default App;
