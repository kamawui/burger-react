import './burger.css';
import {Component} from "react";

class Burger extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {getActiveTab} = this.props;

        return (
            <div className={getActiveTab() === "burger" ? "burger" : "burger hidden"}>
                <div className="burger-content">
                    no content yet
                </div>
            </div>
        );
    }
}

export default Burger;