import LoggedInUser from "./loggedinUser"


const Header = () => {
    return(
        <header>
            <h2>Blog app</h2>
            <LoggedInUser/>
        </header>
    )
}

export default Header;