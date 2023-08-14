import './app.css';
import {Component} from "react";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "burger",
            ingredients: [
                {
                    title: "Cutlet",
                    tag: "cutlet",
                    img: "/ingredients/cutlet.png",
                    burgerPart: "/burger/cutlet.png",
                    count: 0,
                    price: 1,
                    kcal: 50,
                    time: 2,
                    oz: 7
                },
                {
                    title: "Mayo",
                    tag: "mayo",
                    img: "/ingredients/mayo.png",
                    burgerPart: "/burger/mayo.png",
                    count: 0,
                    price: 0.3,
                    kcal: 55,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Onion",
                    tag: "onion",
                    img: "/ingredients/onion.png",
                    burgerPart: "/burger/onion.png",
                    count: 0,
                    price: 0.15,
                    kcal: 0.5,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Tomato",
                    tag: "tomato",
                    img: "/ingredients/tomato.png",
                    burgerPart: "/burger/tomato.png",
                    count: 0,
                    price: 0.15,
                    kcal: 0.5,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Cucumber",
                    tag: "cucumber",
                    img: "/ingredients/cucumber.png",
                    burgerPart: "/burger/cucumber.png",
                    count: 0,
                    price: 0.15,
                    kcal: 0.5,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Cheese",
                    tag: "cheese",
                    img: "/ingredients/cheese.png",
                    burgerPart: "/burger/cheese.png",
                    count: 0,
                    price: 0.5,
                    kcal: 10,
                    time: 1,
                    oz: 1
                },
                {
                    title: "Salad",
                    tag: "salad",
                    img: "/ingredients/salad.png",
                    burgerPart: "/burger/salad.png",
                    count: 0,
                    price: 0.15,
                    kcal: 0.1,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Bun",
                    tag: "bun_middle",
                    img: "/ingredients/bun_middle.png",
                    burgerPart: "/burger/bun_middle.png",
                    count: 0,
                    price: 1,
                    kcal: 30,
                    time: 1,
                    oz: 5
                },

            ],
            defaultIngredients: {
                bunTop: {
                    tag: "bun_top",
                    img: "/burger/bun_top.png",
                },
                bunBottom: {
                    tag: "bun_bottom",
                    img: "/burger/bun_bottom.png",
                }
            },
            filling: [

            ],
            summary: {
                price: 1.00,
                time: 0,
                oz: 0,
                kcal: 0,
            }
        }
    }

    setActiveTab = (activeTab) => {
        this.setState(({activeTab}));
    }

    getActiveTab = () => {
        return this.state.activeTab;
    }

    addIngredient = (tag) => {
        this.setState(({ingredients}) => {
            let ingredient = ingredients.filter(item => item.tag === tag)[0];

            ingredient.count += 0.5;

            this.setState(({summary}) => {
                summary.price += ingredient.price;
                summary.time += ingredient.time;
                summary.oz += ingredient.oz;
                summary.kcal += ingredient.kcal;

                return summary;
            });

            return ingredients;
        });

    }

    removeIngredient = (tag) => {
        this.setState(({ingredients}) => {
            let ingredient = ingredients.filter(item => item.tag === tag)[0];

            if (ingredient.count != 0) {
                ingredient.count -= 0.5;

                this.setState(({summary}) => {
                    summary.price -= ingredient.price;
                    summary.time -= ingredient.time;
                    summary.oz -= ingredient.oz;
                    summary.kcal -= ingredient.kcal;

                    return summary;
                });
            }

            return ingredients;
        })
    }

    fillBurger = () => {  // можно убрать filling вообще и все попробовать сделатб чисто через ingredients, в котором все есть и так, создать функцию которая будет просто возвращать массив из элементов ингредиентов кол-во которых > 1
        this.setState(({filling}) => {
            let ingredients = this.state.ingredients.filter(item => item.count != 0);

            for (let i = 0; i < ingredients.length; i++) {
                while (ingredients[i].count != 0) {
                    filling.push(ingredients[i].title);
                    ingredients[i].count--;
                }
            }

            console.log(filling);

            return filling;
        })
    }

    render() {
        const {filling, ingredients, defaultIngredients, summary} = this.state;

        return (
            <div className="app">
                <Header getActiveTab={this.getActiveTab}  setActiveTab={this.setActiveTab}/>
                <Main getActiveTab={this.getActiveTab} makeBurger={this.setActiveTab}
                      ingredients={ingredients} defaultIngredients={defaultIngredients}
                      filling={filling} summaryData={summary}
                      addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
                <Footer />
            </div>
        )
    }
}

export default App;