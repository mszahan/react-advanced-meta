import { useState } from "react";


function LemonForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log('Form submitted')
    };

    return (
        <div className="lemonForm">
            <h4>Lemon controlled form</h4>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name:</label>
                        <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>

            </form>

        </div>
    )


}

export default LemonForm;