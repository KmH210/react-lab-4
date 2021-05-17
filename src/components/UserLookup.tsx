import GitHubUserSummary from "./GitHubUserSummary";
import { UserInfo, UserRepository } from "../models/GitHub";
import "./UserLookUp.css";


export function UserLookUp(){
    return (
        <div className="UserLookUp">
            <form>
                <label>Enter a GitHub username:
                    <input type="text" className="FormInput"/>
                    </label>
                    <p>
                    <button type="submit">Show User</button>
                    </p>
                   
            </form>
            <GitHubUserSummary username="KMH"/>
        </div>
    )
}

export default UserLookUp;