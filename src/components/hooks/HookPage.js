import GreetState from "./GreetState";
import GoalState from "./GoalState";
import TabEffect from "./TabEffect";

function HookPage (){
    return(
        <div className="hooks">
            <GreetState/>
            <GoalState/>
            <TabEffect/>

        </div>
    )
}


export default HookPage;