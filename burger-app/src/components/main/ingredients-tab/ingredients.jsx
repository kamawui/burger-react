import './ingredients.css';
import {Component} from "react";

class Ingredients extends Component {
    render() {
        const {getActiveTab, ingredients, addIngredient, removeIngredient} = this.props;

        const elements = ingredients.map(item => {
            return (
                <div className="ingredient-item">
                    <div className="ingredient-image">
                        <img src={`${item.img}`} alt=""/>
                    </div>
                    <p className="ingredient-title">{item.title}</p>
                    <div className="ingredient-counter">
                        <button className="op" onClick={() => removeIngredient(item.tag)}>-</button>
                        <span className="count">{item.count}</span>
                        <button className="op" onClick={() => addIngredient(item.tag)}>+</button>
                    </div>
                </div>
            )
        })

        return (
            <div className={getActiveTab() === "burger" ? "ingredients" : "ingredients hidden"}>
                {elements}
            </div>
        );
    }
}

export default Ingredients;