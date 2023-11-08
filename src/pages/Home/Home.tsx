
import { HomePagePost } from "../../components/HomePagePost/Post";
import { Profile } from "../../components/Profile/Profile";
import { HomeContainer, InputContainer, SpanContainer, PostContainer } from "./styles";


export function Home() {
    return (
        <>
            <HomeContainer>

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
                        <HomePagePost />                  
                </PostContainer>
                
        </>

    )
}