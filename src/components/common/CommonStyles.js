import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    margin: 0 auto;
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
    color: rgba(255, 255, 255, 0.5);
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 4rem;
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