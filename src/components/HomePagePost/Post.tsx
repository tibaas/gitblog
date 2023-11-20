import { PostContent, SpanTitle, SpanDate, TitleContainer, Content} from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../utils/api";


interface GitHubIssue {
    id: number
    title: string
    body: string
    comments: number
    created_at: string
    user: {
      html_url: string
      login: string
    } 
  }


  
export function HomePagePost() {
    const [issues, setIssues] = useState<GitHubIssue[]>([])
    const dateFormatter = new Intl.DateTimeFormat('pt-BR')
    const navigate = useNavigate()


    useEffect(() => {
        api.get("/repos/rocketseat-education/reactjs-github-blog-challenge/issues")
        .then((response) => setIssues(response.data))
    }, [])
 
    return (
        <>
            {issues.map((issue) => (
                <PostContent key={issue.id} onClick={() => navigate('/post', { state: { issue }})}>                     
                    <TitleContainer>
                        <SpanTitle>
                        {issue.title}
                        </SpanTitle> 
                        <SpanDate>{dateFormatter.format(new Date(issue.created_at))}</SpanDate>                                 
                        </TitleContainer>         
                        <Content>
                            {issue.body}      
                        </Content>                                              
                </PostContent>
            ))}  
        </>    
    )
}



