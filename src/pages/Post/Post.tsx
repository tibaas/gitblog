import { PostProfile } from "../../components/PostProfile/PostProfile";
import { ContentContainer, PostProfileContainer } from "./styles";

export function Post() {
    return (
        <>
            <PostProfileContainer>
                <PostProfile />
            </PostProfileContainer>

            <ContentContainer>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                </p>

            </ContentContainer>
        </>
    )
}