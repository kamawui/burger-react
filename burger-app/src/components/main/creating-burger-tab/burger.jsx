import './burger.css';
import {Component} from "react";
import View from "./burger-view/view";
import Info from "./burger-info/info";

class Burger extends Component {
    render() {
        const {getActiveTab, ingredients, filling, defaultIngredients, summaryData} = this.props;

        return (
            <div className={getActiveTab() === "burger" ? "burger" : "burger hidden"}>
                <div className="burger-content">
                    <View ingredients={ingredients} filling={filling} defaultIngredients={defaultIngredients}/>
                    <Info summaryData={summaryData}/>
                </div>
            </div>
        );
    }
}

export default Burger;