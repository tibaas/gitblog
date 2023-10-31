import styled from "styled-components";



export const PostContent = styled.div`
width: 26rem;
height: 16.25rem;
padding: 2rem;
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 1rem;
margin-top: 2.5rem;
border-radius: 10px;
background: ${props => props.theme['basePost']};
box-shadow:  4px 4px 5px black;
line-height: 1.4rem;
cursor: pointer;


p {
    color: ${props => props.theme['baseText']};
    overflow: hidden;
    
}

&:hover {
    border:  2px solid ${props => props.theme['baseLabel']};
    
}

`

export const SpanTitle = styled.span`
font-size: 1.3rem;
font-weight: bold;
color: ${props => props.theme['baseTitle']};
line-height: 2rem;
width: 17rem;
`

export const SpanDate = styled.span`
margin-left: 20rem;
margin-top: 0.500rem;
position: absolute;


color: ${props => props.theme['baseSpan']};
font-size: 0.750rem;
font-weight: light;

`
export const TitleContainer = styled.div`
display: flex;
flex-direction: column;



`