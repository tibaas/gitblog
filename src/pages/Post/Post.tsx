import { PostProfile } from "../../components/PostProfile/PostProfile";
import { ContentContainer, PostProfileContainer } from "./styles";
import { useLocation } from 'react-router-dom';


export function Post() {
    const location = useLocation()
    const { issue } = location.state || { issue: {} }
    return (
        <>
            <PostProfileContainer>
                <PostProfile />
            </PostProfileContainer>

            <ContentContainer>
                <p>
                    {issue.body}
                </p>

            </ContentContainer>
        </>
    )
}