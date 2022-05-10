import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
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
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  margin-bottom: 4rem;
`;