import { useState } from "react";

function GreetState () {
    const [greeting, setGreeting] = useState({greet: 'Hello, State'})
    console.log(greeting, setGreeting);

    function updateGreeting(){
        // this is not reccomended way since it updates the whole object
        // setGreeting({greet:'Hello useState'});

        // the best way
        const newGreeting = {...greeting};
        newGreeting.greet = 'Hello, useState hook for object'
        setGreeting(newGreeting)
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}> Update greeting </button>
        </div>
    )
}

export default GreetState;