import { useUser } from "./UserContext";

const LoggedInUser = () => {
    const user = useUser();
    return (
        <p>
            Hello <span className="username">{user.name}</span>
        </p>
    )
}

export default LoggedInUser;