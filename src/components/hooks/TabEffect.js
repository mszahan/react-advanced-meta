import { useState, useEffect } from "react";


function TabEffect (){
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? 'welcome to little lemon' : 'Using the useEffect hook'
    }, [toggle]);


    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {toggle && <h2>welcome to little lemon</h2>}
        </div>
    )
}

export default TabEffect;