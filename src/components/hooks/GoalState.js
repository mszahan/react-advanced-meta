import { useState } from "react";

function GoalForm(props) {
    const [formData, setFormData] = useState({goal:'', by:''});

    function changeHandler (e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:'', by:''});
    };

    return (
        <>
        <h1>
            My little lemon Goals
        </h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="goal" placeholder="goal" value={formData.goal} onChange={changeHandler}/>
            <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler}/>
            <button type="submit">Submit Goal</button>
        </form>
        </>
    )
}

function ListOfGoals(props){
    return (
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <p>My goal is to {g.goal} by {g.by}</p>

                </li>

            ))}
        </ul>
    )

}

export default function GoalState() {
    const [allGoals, updateAllGoals] = useState([])

    function addGoal (goal) {updateAllGoals([...allGoals, goal])}

    return (
        <div className="goals">
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>

        </div>
    )
}