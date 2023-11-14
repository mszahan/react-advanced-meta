import GreetState from "./GreetState";
import GoalState from "./GoalState";
import TabEffect from "./TabEffect";
import FetchCoin from "./FetchCoin";

function HookPage (){
    return(
        <div className="hooks">
            <GreetState/>
            <GoalState/>
            <TabEffect/>
            <FetchCoin/>

        </div>
    )
}


export default HookPage;