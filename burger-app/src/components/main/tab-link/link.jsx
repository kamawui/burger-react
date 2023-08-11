import './link.css';
import {Component} from "react";

class Link extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                linkText: "MAKE BURGER"
            }
        }
    }

    render() {
        const {data} = this.state;
        const {getActiveTab, makeBurger} = this.props;

        return (
            <button onClick={() => makeBurger("burger")} className={getActiveTab() === "intro" ? "link" : "link hidden"}>
                {data.linkText}
            </button>
        );
    }
}

export default Link;