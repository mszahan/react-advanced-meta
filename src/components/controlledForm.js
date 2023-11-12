import { useState } from "react";

const ControlledForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return(
        <>
        <h4>
            controlled form 
        </h4>
        <form>
            <input 
                value={value}
                onChange={handleChange}
                type="text"
            />
            <input type="submit" value="Submit" />

        </form>
        </>
    )
}

export default ControlledForm;