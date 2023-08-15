import './app.css';
import {Component} from "react";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "intro",
            ingredients: [
                {
                    title: "Cutlet",
                    tag: "cutlet",
                    img: "/ingredients/cutlet.png",
                    burgerPart: "/burger/cutlet.png",
                    count: 0,
                    price: 2,
                    kcal: 200,
                    time: 2,
                    oz: 7
                },
                {
                    title: "Mayo",
                    tag: "mayo",
                    img: "/ingredients/mayo.png",
                    burgerPart: "/burger/mayo.png",
                    count: 0,
                    price: 1,
                    kcal: 150,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Onion",
                    tag: "onion",
                    img: "/ingredients/onion.png",
                    burgerPart: "/burger/onion.png",
                    count: 0,
                    price: 0.5,
                    kcal: 15,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Tomato",
                    tag: "tomato",
                    img: "/ingredients/tomato.png",
                    burgerPart: "/burger/tomato.png",
                    count: 0,
                    price: 0.5,
                    kcal: 10,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Cucumber",
                    tag: "cucumber",
                    img: "/ingredients/cucumber.png",
                    burgerPart: "/burger/cucumber.png",
                    count: 0,
                    price: 0.5,
                    kcal: 10,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Cheese",
                    tag: "cheese",
                    img: "/ingredients/cheese.png",
                    burgerPart: "/burger/cheese.png",
                    count: 0,
                    price: 1,
                    kcal: 40,
                    time: 1,
                    oz: 1
                },
                {
                    title: "Salad",
                    tag: "salad",
                    img: "/ingredients/salad.png",
                    burgerPart: "/burger/salad.png",
                    count: 0,
                    price: 0.5,
                    kcal: 10,
                    time: 0,
                    oz: 0.5
                },
                {
                    title: "Bun",
                    tag: "bun_middle",
                    img: "/ingredients/bun_middle.png",
                    burgerPart: "/burger/bun_middle.png",
                    count: 0,
                    price: 2,
                    kcal: 100,
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
                },
                gift: {
                    tag: "gift",
                    img: "burger/ketchup.png",
                    message: "+ Tomato Ketchup"
                },
            },
            summary: {
                price: 1.00,
                time: 0,
                oz: 0,
                kcal: 0,
            },
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

            ingredient.count += 1;

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

            if (ingredient.count !== 0) {
                ingredient.count -= 1;

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

    fillBurger = () => {
        const ingredients = [...this.state.ingredients.filter(item => item.count !== 0)];
        const filling = [];

        for (let i = 0; i < ingredients.length; i++) {
            let count = ingredients[i].count;
            while (count !== 0) {
                let ingredient = {};

                ingredient.tag = ingredients[i].tag;
                ingredient.burgerPart = ingredients[i].burgerPart;

                filling.push(ingredient);

                count--;
            }
        }

        return filling;
    }

    mixBurger = (filling) => {
        const template = [
            "mayo",
            "salad",
            "cheese",
            "tomato",
            "bun_middle",
            "onion",
            "cutlet",
            "cucumber",
        ];

        const burger = [];

        let burgerLength = filling.length;
        let currentStep = 0;
        let zIndex = 1;

        while (burgerLength != 0) {
            let indexOfIngredient = filling.findIndex(item => item.tag === template[currentStep]);

            if (indexOfIngredient > -1) {
                filling[indexOfIngredient].zIndex = zIndex;
                burger.push(filling[indexOfIngredient]);
                filling.splice(indexOfIngredient, 1);
                zIndex++;
                burgerLength--;
            }

            if (currentStep === template.length) {
                currentStep = 0;
            } else {
                currentStep++
            }
        }

        return burger.reverse();
    }

    getTotalPrice = () => {
        return this.state.summary.price;
    }

    render() {
        const {ingredients, defaultIngredients, summary} = this.state;

        const filling = this.mixBurger(this.fillBurger());

        return (
            <div className="app">
                <Header getActiveTab={this.getActiveTab}  setActiveTab={this.setActiveTab}/>
                <Main getActiveTab={this.getActiveTab} makeBurger={this.setActiveTab}
                      ingredients={ingredients} defaultIngredients={defaultIngredients}
                      filling={filling} summaryData={summary}
                      addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}
                      getTotalPrice={this.getTotalPrice}/>
                <Footer />
            </div>
        )
    }
}

export default App;