import axios from "axios";
import { PostContent, SpanTitle, SpanDate, TitleContainer, Content} from "./styles";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'



const api = axios.create({
    baseURL: "https://api.github.com"
})


interface GitHubIssue {
    bio: string
    comments: number
    title: string
    body: string
    id: number
    created_at: string
    user: {
      html_url: string
      login: string
    }
    
    
  }
  


export function HomePagePost() {
    const [issues, setIssues] = useState<GitHubIssue[]>([])
    const dateFormatter = new Intl.DateTimeFormat('pt-BR');
    useEffect(() => {
        api.get("/repos/rocketseat-education/reactjs-github-blog-challenge/issues")
        .then((response) => setIssues(response.data))
    }, [])

    
    return (
        <>
            {issues.map((issue) => (
                <PostContent key={issue.id}>   
                <NavLink to="/post">
                    <TitleContainer>
                       <SpanTitle>
                          {issue.title}
                      </SpanTitle> 
                          <SpanDate>{dateFormatter.format(new Date(issue.created_at))}</SpanDate>                                 
                    </TitleContainer>         
                        <Content>
                            {issue.body}      
                        </Content>                        
                </NavLink>                      
                </PostContent>
            ))}                      
        </>    
    )
}