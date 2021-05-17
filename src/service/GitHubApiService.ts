import { UserRepository } from "../models/GitHub";
import { UserInfo} from "../models/GitHub";

const ghCredentials = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa(ghCredentials); // Base 64 endcode

export function fetchUserProfile(username: string): Promise<UserInfo> {
    //TODO fix me!
    return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then((data: UserInfo) => {
        return data;
    });
}

export function fetchUserRepository(username: string): Promise<UserRepository> {
    return fetch (`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then((data: UserRepository) => {
        return data;
    });
}