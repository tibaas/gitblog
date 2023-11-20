import styled from "styled-components";

export const HomeContainer = styled.div `

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const InputContainer = styled.div`

    width: 54rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 33rem;
    margin-top: 1rem;
    :focus{
            border: 2px solid ${props => props.theme['baseLabel']}; 
        }
    input {
        width:100%;
        height: 3.1rem;
        border-radius: 6px;
        background: ${props => props.theme['baseInput']};
        border: 2px solid ${props => props.theme['baseBorder']};
        color: ${props => props.theme['baseText']};
        outline: none;
        font-size: 1rem;
        text-indent: 10px;

      
        

    &::placeholder{
        color: ${props => props.theme['baseLabel']}; 
    }
    }
    



`


export const SpanContainer = styled.div`
    
    width: 54rem;
    margin-top: 10rem;
    margin-left: 33rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 1.2rem;
        font-weight: bold;
        color: ${props => props.theme['baseSubtitle']}
    }
    p {
        color: ${props => props.theme['baseSpan']};
        font-size: 0.875rem;
    }

   


`


export const PostContainer = styled.div`

width: 56rem;
margin-left: 33rem;


display: grid;
    grid-template-columns: 1fr 1fr ;






`