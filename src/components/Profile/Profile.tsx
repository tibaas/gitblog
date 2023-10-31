import { GithubLogo,Code,  Users, Link } from "phosphor-react";
import { ProfileContainer, ImageContainer, ProfileContent, IconsContainer, TitleContainer, LinkSpan, TittleSpan } from "./styles";


export function Profile() {
    return (
        <ProfileContainer>
            <ImageContainer>
                <img src="https://avatars.githubusercontent.com/u/59897978?v=4" alt="" />
            </ImageContainer>
            <ProfileContent>
                <TitleContainer>
                    <TittleSpan>Igor Tibério</TittleSpan>
                     <LinkSpan>
                        <a href="https://github.com/tibaas">GITHUB</a>
                     <Link size={17} color={'#3294F8'} />
                     </LinkSpan>
                   
                </TitleContainer>

                <p>Passionate about technology since childhood, had my first contact with a computer when I was 11 years old. Since then, have been passionate about technology and code.</p>
                <IconsContainer>
                    <div>
                        <GithubLogo size={24}  /> <p>tibaas</p>
                    </div>

                    <div>
                        <Code size={24}  /> <p>Web Developer</p>
                    </div>

                    <div>
                        <Users size={24}  /> <p>8 seguidores</p>
                    </div>
                </IconsContainer>
                
            </ProfileContent>
        </ProfileContainer>
    )
}