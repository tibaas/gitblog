import styled from "styled-components";

export const HeaderContainer = styled.header`

height: 18.5rem;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

background: ${props => props.theme['baseBorder']};

box-shadow:  1px 1px 15px black;
z-index: 1;

`

export const LogoContainer = styled.img`
margin-bottom: 5rem;

`