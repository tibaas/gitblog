import { ArrowLeft, GithubLogo, Link } from "phosphor-react";
import { BackLink, IconsContainer, LinkSpan, ProfileContainer, ProfileContent, TitleContainer, TittleSpan } from "./styles";


export function PostProfile() {
    return (
        <ProfileContainer>

        <ProfileContent>
            <TitleContainer>
                <BackLink>
                <ArrowLeft size={17} /><a href="/"> VOLTAR</a>
                
                </BackLink>
                
                 <LinkSpan>
                    <a href="https://github.com/tibaas">VER NO GITHUB</a>
                 <Link size={17} color={'#3294F8'} />
                 </LinkSpan>
               
            </TitleContainer>

            <TittleSpan>JavaScript data types and data structures</TittleSpan>
            <IconsContainer>
                <div>
                    <GithubLogo size={24}  /> <p>tibaas</p>
                </div>

                <div>
                    
                </div>

                <div>
                   
                </div>
            </IconsContainer>
            
        </ProfileContent>
    </ProfileContainer>
    )
}