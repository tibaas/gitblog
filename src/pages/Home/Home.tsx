
import { useState, useEffect } from "react";
import { GitHubIssue, HomePagePost } from "../../components/HomePagePost/Post";
import { Profile } from "../../components/Profile/Profile";
import { HomeContainer, InputContainer, SpanContainer, PostContainer } from "./styles";
import { api } from "../../utils/api";


export function Home() {
    const [filter, setFilter] = useState<string>('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [issues, setIssues] = useState<GitHubIssue[]>([])
    const [filteredIssues, setFilteredIssues] = useState<GitHubIssue[]>([]);

    useEffect(() => {
        api.get("/repos/rocketseat-education/reactjs-github-blog-challenge/issues")
            .then((response) => {
                const issues = response.data
                setIssues(issues)
                const filtered = issues.filter((issue: { title: string; }) =>
                    issue.title.toLowerCase().includes(filter.toLowerCase())
                )
                setFilteredIssues(filtered)
            })
    }, [filter]);

    const numberOfFilteredIssues = filteredIssues.length;

    return (
        <>
            <HomeContainer>

                <Profile />
            </HomeContainer>
            <SpanContainer>
                <span>Publicações</span>
                <p>{numberOfFilteredIssues} publicações</p>
            </SpanContainer>
            <InputContainer>
                <input 
                type="text" 
                placeholder="Buscar conteúdo"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}              
                />

            </InputContainer>
                <PostContainer>                  
                        <HomePagePost filter={filter} />                  
                </PostContainer>
                
        </>

    )
}