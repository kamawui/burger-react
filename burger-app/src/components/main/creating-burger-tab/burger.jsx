import './burger.css';
import {Component} from "react";
import View from "./burger-view/view";
import Summary from "./summary/summary";

class Burger extends Component {
    render() {
        const {getActiveTab, filling, defaultIngredients, summaryData, getTotalPrice} = this.props;

        return (
            <div className={getActiveTab() === "burger" ? "burger" : "burger hidden"}>
                <div className="burger-content">
                    <View filling={filling} defaultIngredients={defaultIngredients}
                          getTotalPrice={getTotalPrice}/>
                    <Summary summaryData={summaryData}/>
                </div>
            </div>
        );
    }
}

export default Burger;