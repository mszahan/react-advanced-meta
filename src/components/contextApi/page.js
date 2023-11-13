import { useUser } from "./UserContext";

const Page = () => {
    const user = useUser()
    return (
        <div>
            <h2>What is lorem ipsum</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore facere harum inventore totam quisquam facilis ullam nesciunt doloribus reprehenderit,
            deleniti consequuntur, ratione vitae? Magnam, eaque!
            </p>
            <p>Written by {user.name} </p>
        </div>
    )
}

export default Page;


