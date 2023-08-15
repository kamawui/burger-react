import './summary.css';
import {Component} from "react";

class Summary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                summaryLabels: {
                    header: "Summary",
                    button: "Checkout",
                    message: {
                        part1: "Build a ",
                        part2: "$10",
                        part3: " Burger and Get a Gift"
                    },
                    icons: {
                        clock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="clock 1" clip-path="url(#clip0_1364_1877)">
                                <path id="Vector" d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM11.8047 12.1379C11.6747 12.2679 11.504 12.3334 11.3334 12.3334C11.1627 12.3334 10.9919 12.2679 10.8621 12.1379L7.52869 8.80469C7.40332 8.68005 7.33337 8.51062 7.33337 8.33337V4C7.33337 3.63135 7.63196 3.33337 8 3.33337C8.36804 3.33337 8.66663 3.63135 8.66663 4V8.05737L11.8047 11.1953C12.0653 11.4561 12.0653 11.8773 11.8047 12.1379Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1364_1877">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>,
                        weights: <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="scale (1) 1" clip-path="url(#clip0_1364_1883)">
                                <g id="Group">
                                    <g id="Group_2">
                                        <path id="Vector" d="M15.7746 1.5254C15.3654 1.04795 14.8197 0.775094 14.2058 0.843324H2.40572C1.17796 0.843324 0.154829 2.00288 0.359456 3.23064L1.99647 13.462C2.1329 14.4851 3.0196 15.1672 4.04273 15.1672H12.637C13.6602 15.1672 14.5469 14.4169 14.6833 13.462L16.3203 3.23064C16.3885 2.61676 16.1839 2.00288 15.7746 1.5254ZM9.77227 9.71046C9.56765 9.50583 9.36302 9.3694 9.09019 9.30121L9.63588 6.57286L8.27169 6.30004L7.65781 9.23301C7.38499 9.30121 7.11213 9.50583 6.8393 9.71046L3.42885 6.36824C6.089 3.70809 10.3862 3.70809 13.0463 6.36824L9.77227 9.71046Z" fill="white"/>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1364_1883">
                                    <rect width="16" height="16" fill="white" transform="translate(0.333252)"/>
                                </clipPath>
                            </defs>
                        </svg>,
                        fire: <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="fire 1">
                                <path id="Vector" d="M13.4167 1C9.43867 3.4558 9.91673 10.375 9.91673 10.375C9.91673 10.375 8.16675 9.74998 8.16675 6.93751C6.07889 8.23465 4.66675 10.7278 4.66675 13.5C4.66675 17.6421 7.80075 21 11.6667 21C15.5327 21 18.6667 17.6421 18.6667 13.5C18.6667 7.40626 13.4167 6.15624 13.4167 1ZM12.2816 18.4157C10.875 18.7915 9.45033 17.8744 9.09955 16.3672C8.74885 14.8601 9.60483 13.3336 11.0115 12.9578C14.4076 12.0506 14.8332 10.0045 14.8332 10.0045C14.8332 10.0045 16.5267 17.2817 12.2816 18.4157Z" fill="white"/>
                            </g>
                        </svg>,
                    },
                    units: {
                        currency: "$",
                        time: "min",
                        weight: "oz",
                        calories: "kcal"
                    }
                }
            }
        }
    }

    integerToString = (value) => {
        let string = value.toFixed(2).toString();

        if (string.indexOf(".") > 0) {
            if (string.substring(string.indexOf(".")).length > 2) {
                return string.substring(0, string.indexOf(".") + 3);
            }

            return string;
        }

        return string + ".00";
    }

    cutInteger = (value) => {
        return value.toFixed(0).toString();
    }


    render() {
        const {data} = this.state;
        const {summaryData} = this.props;

        return (
            <div className="summary">
                <p className="summary-header">{data.summaryLabels.header}</p>
                <div className="price-info">
                    <span className="price">{data.summaryLabels.units.currency}{this.integerToString(summaryData.price)}</span>
                    <button>{data.summaryLabels.button}</button>
                </div>
                <p className="summary-message">
                    {data.summaryLabels.message.part1}
                    <span>{data.summaryLabels.message.part2}</span>
                    {data.summaryLabels.message.part3}
                </p>
                <div className="total-info">
                    <div className="total-info-part time">
                        <div className="time-icon">{data.summaryLabels.icons.clock}</div>
                        <span>{summaryData.time} {data.summaryLabels.units.time}</span>
                    </div>
                    <div className="total-info-part weight">
                        <div className="weight-icon">{data.summaryLabels.icons.weights}</div>
                        <span>{summaryData.oz} {data.summaryLabels.units.weight}</span>
                    </div>
                    <div className="total-info-part calories">
                        <div className="fire-icon">{data.summaryLabels.icons.fire}</div>
                        <span>{this.cutInteger(summaryData.kcal)} {data.summaryLabels.units.calories}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;