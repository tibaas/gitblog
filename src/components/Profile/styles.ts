import styled from "styled-components";

export const ProfileContainer = styled.div`

height: 13.25rem;
width: 54rem;
display: flex;
align-items: center;
padding: 2rem;
position: absolute;
margin-top: 21rem;

border-radius: 10px;
box-shadow:  4px 4px 20px black;
background: ${props => props.theme['baseProfile']};

`


export const ImageContainer = styled.div`


img {
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
}


`

export const ProfileContent = styled.div`
display: flex;
flex-direction: column;
line-height: 1.4rem;
padding: 2rem;

    p  {
        font-size: 1rem;
        color: ${props => props.theme['baseText']};
        
    }

`

export const IconsContainer = styled.div`
display: flex;
align-items: center;
margin-top: 2rem;

gap: 2rem;
color: ${props=> props.theme['baseSpan']};

div {
    display: flex;
    gap: 4px;
}

p {
    font-size: 0.875rem;
    color: ${props=> props.theme['baseSpan']};  
}


`

export const TitleContainer = styled.div`

display: flex;
align-items: center;
margin-bottom: 1.5rem;



`

export const LinkSpan = styled.div`

display: flex;
align-items: center;
margin-left: 20rem;
font-family: 'Nunito', sans-serif;
font-size: 0.850rem;
font-weight: bold;
gap: 3px;
color: ${props => props.theme['blue']};
cursor: pointer;

a {
    text-decoration: none;
    color: ${props => props.theme['blue']}; 
}

&:hover {
    text-decoration: underline;
    
}



`

export const TittleSpan = styled.span `

font-family: 'Nunito', sans-serif;
font-weight: bold;
font-size: 2rem;
color: ${props => props.theme['baseTitle']};


`
