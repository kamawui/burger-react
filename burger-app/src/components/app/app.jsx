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
            ingredients: {
                cutlet: {
                    title: "Cutlet",
                    tag: "cutlet",
                    img: "/cutlet.png",
                },
                mayo: {
                    title: "Mayo",
                    tag: "mayo",
                    img: "/mayo.png",
                },
                onion: {
                    title: "Onion",
                    tag: "onion",
                    img: "/onion.png",
                },
                tomato: {
                    title: "Tomato",
                    tag: "tomato",
                    img: "/tomato.png",
                },
                cucumber: {
                    title: "Cucumber",
                    tag: "cucumber",
                    img: "/cucumber.png",
                },
                cheese: {
                    title: "Cheese",
                    tag: "cheese",
                    img: "/cheese.png",
                },
                salad: {
                    title: "Salad",
                    tag: "salad",
                    img: "/salad.png",
                },
                bunBottom: {
                    title: "Bun",
                    tag: "bun_bottom",
                    img: "/bun_bottom.png",
                },
                bunMiddle: {
                    title: "Bun",
                    tag: "bun_middle",
                    img: "/bun_middle.png",
                },
                bunTop: {
                    title: "Bun",
                    tag: "bun_top",
                    img: "/bun_top.png",
                },
            },
            filling: {

            },
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

    getIngredients = () => {
        return this.state.ingredients;
    }

    getCurrentBurger = () => {
        return this.state.filling;
    }

    getSummary = () => {
        return this.state.summary;
    }

    render() {
        const {filling, ingredients, summary} = this.state;

        return (
            <div className="app">
                <Header getActiveTab={this.getActiveTab}  setActiveTab={this.setActiveTab}/>
                <Main getActiveTab={this.getActiveTab} makeBurger={this.setActiveTab}
                      ingredients={ingredients} renderBurger={filling} summaryData={summary}/>
                <Footer />
            </div>
        )
    }
}

export default App;