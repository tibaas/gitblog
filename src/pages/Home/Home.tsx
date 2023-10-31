
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { Profile } from "../../components/Profile/Profile";
import { HomeContainer, InputContainer, SpanContainer, PostContainer } from "./styles";

export function Home() {
    return (
        <>
            <HomeContainer>
                <Header />
                <Profile />
            </HomeContainer>
            <SpanContainer>
                <span>Publicações</span>
                <p>6 publicações</p>
            </SpanContainer>
            <InputContainer>
                <input type="text" placeholder="Buscar conteúdo" />
            </InputContainer>
            <PostContainer>
                <Post />
                <Post /> 
                <Post /> 
                <Post />
                <Post />  
                <Post />    
            </PostContainer>
                
        </>

    )
}