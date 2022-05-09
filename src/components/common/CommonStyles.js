import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props=>props.fullHeight ? "80vh" : 'auto'};
    max-width: 1040px;
    margin-top: 5%;
`;

export const SectionTitle = styled.h2`
    width: max-content;
    font-size: 56px;
    color: rgba(255, 255, 255);
    margin-bottom:16px
`;

export const SectionText = styled.p`
    max-width: 800px;
    font-size: 24px;
    color: ${props => props.theme.colors.primary2};
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 4rem;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.size}rem;
`;

export const LogoImg = styled.img`
    width: 100%;
    margin-bottom: 0.5rem;
`;

export const LogoText = styled.div`
    color: transparent;
    ${LogoContainer}:hover & {
        color: #FFFFFF;
    }
    transition: 0.3s;
    overflow: visible;
    font-size: 1.5rem;
    white-space: nowrap;
`;

// export const SectionDivider = styled.div`
//   width: 64px;
//   height: 6px;
//   border-radius: 10px;
//   background-color: #fff;
//   background: ${(props) => props.colorAlt ? 
//     'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
//     'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
//     margin: ${(props) => props.divider ? "4rem 0" : "" };
// `;