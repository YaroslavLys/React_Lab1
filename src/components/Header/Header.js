import {LogoText, NavItem, Wrapper, Nav, LogoImage} from './Header.styles'
import Logo from "../../assets/logo.png"


export function Header() {
    return (
        <Wrapper>
            <LogoText>Vase shop</LogoText>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog</NavItem>
                <NavItem>Cart</NavItem>
            </Nav>
            <LogoImage src={Logo}/>
        </Wrapper>
    );
}