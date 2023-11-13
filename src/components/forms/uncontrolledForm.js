import { useRef } from "react"

const UncontrolledForm = () =>{
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        console.log(inputValue);
    }

    return (
        <>
        <h4>Uncontrolled form</h4>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
            <input type="submit" value="Submit" />

        </form>
        </>
    )

}

export default UncontrolledForm;