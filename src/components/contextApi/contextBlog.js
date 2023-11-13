import Header from "./header";
import Page from "./page";
import { UserProvider } from "./UserContext";


function ContextBlog () {
    return (
        <div className="blog">
            <UserProvider>
                <Header/>
                <Page/>
            </UserProvider>

        </div>
    )
}

export default ContextBlog;