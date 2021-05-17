import { UserInfo, UserRepository} from "../models/GitHub";
import { fetchUserProfile, fetchUserRepository } from "../service/GitHubApiService";
import { useState, useEffect } from "react";

interface Props {
    username: string;
}

export function GitHubUserSummary ({username}: Props) {

    const [selectUserName, setUserName] = useState({username});
    const [userProfile, setUserProfile] = useState<UserInfo | null> (null);

    useEffect(() => {
        fetchUserProfile(username).then(data => {
            setUserProfile(data);
        });
    }, [selectUserName]);

    console.log(userProfile);

    return(
        <div className="GitHubUserSummary">
        { userProfile ?
            <div className="UserProfile">
                <p>{userProfile.name} ({userProfile.login})</p>
                { userProfile.avatar_url && <img src={userProfile.avatar_url} alt="" /> }
                <p>{userProfile.html_url}</p>
            </div> :
            <p>No Selected User.</p>
        }
    </div>
    )}

export default GitHubUserSummary;