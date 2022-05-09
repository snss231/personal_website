import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props=>props.fullHeight ? '100vh' : 'auto'};
    justify-content: center;
    max-width: 1040px;
    margin-bottom: 10rem;
`;

export const SectionTitle = styled.h2`
    width: max-content;
    font-size: 56px;
    color: rgb(255, 255, 255);
    margin-bottom: 5rem;
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
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  margin-bottom: 4rem;
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