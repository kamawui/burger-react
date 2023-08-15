import './view.css';
import {Component} from "react";

class View extends Component {
    render() {
        const {filling, defaultIngredients, getTotalPrice} = this.props;

        const ingredients = filling.map(item => {
            return (
                <div className={item.tag} style={{zIndex: item.zIndex}}><img src={`${item.burgerPart}`} alt=""/></div>
            )
        });

        let butTopZIndex = ingredients.length + 1;

        return (
            <div className="burger-area">
                <div className={defaultIngredients.bunTop.tag} style={{zIndex: butTopZIndex}}><img src={`${defaultIngredients.bunTop.img}`} alt=""/></div>
                {ingredients}
                <div className={defaultIngredients.bunBottom.tag} style={{zIndex: 0}}><img src={`${defaultIngredients.bunBottom.img}`} alt=""/></div>
                <div className={getTotalPrice() >= 10 ? "gift-area" : "gift-area hidden"} style={{zIndex: butTopZIndex + 1}}>
                    <div className={defaultIngredients.gift.tag}>
                        <img src={`${defaultIngredients.gift.img}`} alt=""/>
                        <p className="message">{defaultIngredients.gift.message}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default View;