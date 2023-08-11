import './headline.css';
import {Component} from "react";

class Headline extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                headlineText: "Make Your Burger"
            }
        }
    }

    render() {
        const {data} = this.state;

        return (
            <div className="headline">
                {data.headlineText}
            </div>
        );
    }
}

export default Headline;