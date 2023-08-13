import './main.css';
import {Component} from "react";
import Headline from "./headline/headline";
import Link from "./tab-link/link";
import Intro from "./intro-tab/intro";
import Burger from "./creating-burger-tab/burger";

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {getActiveTab, makeBurger, ingredients, renderBurger, summaryData} = this.props;

        return (
            <div className="main">
                <Headline />
                <Link getActiveTab={getActiveTab} makeBurger={makeBurger}/>
                <Intro getActiveTab={getActiveTab}/>
                <Burger getActiveTab={getActiveTab}
                        ingredients={ingredients} renderBurger={renderBurger} summaryData={summaryData}/>
            </div>
        );
    }
}

export default Main;