import GreetState from "./GreetState";
import GoalState from "./GoalState";
import TabEffect from "./TabEffect";
import FetchCoin from "./FetchCoin";
import CashReducer from "./CashReducer";

function HookPage (){
    return(
        <div className="hooks">
            <GreetState/>
            <GoalState/>
            <TabEffect/>
            <FetchCoin/>
            <CashReducer/>

        </div>
    )
}


export default HookPage;