import logos from '../common/logos';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.size}rem;
`;

const LogoImg = styled.img`
    width: 100%;
    margin-bottom: 0.5rem;
    height: ${props => props.size}rem;
`;

 const LogoText = styled.div`
    color: transparent;
    ${LogoContainer}:hover & {
        color: #FFFFFF;
    }
    transition: 0.3s;
    overflow: visible;
    font-size: 1.5rem;
    white-space: nowrap;
`;

const Logo = ({ size, name }) => (
    <LogoContainer size={size}>
        <LogoImg size={size} src={logos[name].src}/>
        <LogoText>{logos[name].name}</LogoText>
    </LogoContainer>
);

export default Logo;