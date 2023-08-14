import './main.css';
import {Component} from "react";
import Headline from "./headline/headline";
import Link from "./tab-link/link";
import Intro from "./intro-tab/intro";
import Burger from "./creating-burger-tab/burger";
import Ingredients from "./ingredients-tab/ingredients";

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {getActiveTab, makeBurger, ingredients, defaultIngredients, filling, summaryData, addIngredient, removeIngredient}
            = this.props;

        return (
            <div className="main-wrapper">
                <div className="main">
                    <Headline />
                    <Link getActiveTab={getActiveTab} makeBurger={makeBurger}/>
                    <Intro getActiveTab={getActiveTab}/>
                    <Burger getActiveTab={getActiveTab} defaultIngredients={defaultIngredients}
                            filling={filling} summaryData={summaryData}/>

                </div>
                <Ingredients getActiveTab={getActiveTab} ingredients={ingredients}
                             addIngredient={addIngredient} removeIngredient={removeIngredient}/>
            </div>
        )

    }
}

export default Main;