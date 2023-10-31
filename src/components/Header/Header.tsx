import { HeaderContainer, LogoContainer } from "./styles";
import  gpblogo  from '../../assets/gpblogo.svg'
export function Header() {
    return (
        <div>
            
            
            <HeaderContainer>
                <LogoContainer src={gpblogo} alt="" />
            </HeaderContainer>
        </div>
    )
}