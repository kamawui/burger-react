import './app.css';
import {Component} from "react";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "intro"
        }
    }

    setActiveTab = (activeTab) => {
        this.setState(({activeTab}));
    }

    getActiveTab = () => {
        return this.state.activeTab;
    }

    render() {
        console.log(this.state.activeTab)
        return (
            <div className="app">
                <Header getActiveTab={this.getActiveTab}  setActiveTab={this.setActiveTab}/>
                <Main getActiveTab={this.getActiveTab} makeBurger={this.setActiveTab}/>
                <Footer />
            </div>
        )
    }
}

export default App;