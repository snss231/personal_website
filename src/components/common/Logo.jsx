import { LogoContainer, LogoImg, LogoText } from "./CommonStyles";
import logos from '../common/logos';

const Logo = ({ size, name }) => (
    <LogoContainer size={size}>
        <LogoImg src={logos[name].src}/>
        <LogoText>{logos[name].name}</LogoText>
    </LogoContainer>
);

export default Logo;