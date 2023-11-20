import { ArrowLeft, ArrowSquareOut, CalendarBlank, ChatCircle, GithubLogo} from "phosphor-react";
import { BackLink, IconsContainer, LinkSpan, ProfileContainer, ProfileContent, TitleContainer, TittleSpan } from "./styles";
import { useLocation } from "react-router-dom";


export function PostProfile() {
    const location = useLocation()
    const { issue } = location.state || { issue: {} }
    const dateFormatter = new Intl.DateTimeFormat('pt-BR')
    return (
        <ProfileContainer>

        <ProfileContent>
            <TitleContainer>
                <BackLink>
                <ArrowLeft size={17} /><a href="/"> VOLTAR</a>
                
                </BackLink>
                
                 <LinkSpan>
                    <a href={issue.html_url}>VER NO GITHUB</a>
                 <ArrowSquareOut size={17} color={'#3294F8'}  />
                 </LinkSpan>
               
            </TitleContainer>

            <TittleSpan>{issue.title}</TittleSpan>
            <IconsContainer>
                <div>
                    <GithubLogo size={24} /> <p>{issue.user.login}</p>
                </div>

                <div>
                    <CalendarBlank size={24} /> <p>{dateFormatter.format(new Date(issue.created_at))}</p>
                </div>

                <div>
                <ChatCircle size={22} /> <p>{issue.comments} Comentários</p>
                </div>
            </IconsContainer>
            
        </ProfileContent>
    </ProfileContainer>
    )
}