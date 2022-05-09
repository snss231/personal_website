import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const theme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  colors: {
    primary: "hsl(204,23.8%,95.9%)",
    primary2: "rgba(255, 255, 255, 0.6);",
    background: "#292929",
    accent: "#06fdd8",
    button: "hsl(205.1,100%,36.1%)",
    background2: "#353535",
    backgroundheader: "rgba(37, 37, 37, 0.5)"
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
`;

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        {children}
    </ThemeProvider>
);

export default Theme;