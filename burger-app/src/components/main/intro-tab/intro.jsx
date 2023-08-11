import './intro.css';
import {Component} from "react";

class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                img: '/burger.png',
                emoji: [
                    {
                        img: '/emoji1.png'
                    },
                    {
                        img: '/emoji2.png'
                    },
                    {
                        img: '/emoji3.png'
                    },
                    {
                        img: '/emoji4.png'
                    }
                ]
            },
        }
    }

    render() {
        const {data} = this.state;
        const {getActiveTab} = this.props;

        return (
            <div className={getActiveTab() === "intro" ? "intro" : "intro hidden"}>
                <img className="background" src={`${data.img}`} alt=""/>
                <img className="emoji emoji-first" src={`${data.emoji[0].img}`} alt=""/>
                <img className="emoji emoji-second" src={`${data.emoji[1].img}`} alt=""/>
                <img className="emoji emoji-third" src={`${data.emoji[2].img}`} alt=""/>
                <img className="emoji emoji-fourth" src={`${data.emoji[3].img}`} alt=""/>
            </div>
        );
    }
}

export default Intro;