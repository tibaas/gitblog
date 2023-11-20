import styled from "styled-components";

export const PostProfileContainer = styled.div`

display: flex;
align-items: center;


`

export const ContentContainer = styled.div`
height: 100%;
width: 54rem;
display: flex;
align-items: center;
padding: 2rem;
margin-left: 33rem;
margin-top: 7rem;

p {
    color: ${props => props.theme['baseText']};
    line-height: 1.5rem;
}

`