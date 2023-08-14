import './view.css';
import {Component} from "react";

class View extends Component {
    render() {
        const {filling, defaultIngredients} = this.props;

        return (
            <div className="burger-area">
                <div className="bun-top"><img src={`${defaultIngredients.bunTop.img}`} alt=""/></div>
                <div className="bun-bottom"><img src={`${defaultIngredients.bunBottom.img}`} alt=""/></div>
            </div>
        );
    }

}

export default View;