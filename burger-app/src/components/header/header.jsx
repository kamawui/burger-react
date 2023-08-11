import {Component} from "react";
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                logo: <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="a" d="M14.1644 0C14.6947 0 15.1332 0.183785 15.4799 0.551353C15.8266 0.918919 16 1.39459 16 1.97838V15.6973C16 16.2595 15.8266 16.7351 15.4799 17.1243C15.1332 17.4919 14.6947 17.6757 14.1644 17.6757C13.6342 17.6757 13.1957 17.4919 12.8489 17.1243C12.5226 16.7568 12.3493 16.2919 12.3289 15.7297C11.819 16.3568 11.1256 16.8973 10.2486 17.3514C9.39197 17.7838 8.48439 18 7.52581 18C6.11855 18 4.84385 17.6216 3.70172 16.8649C2.55959 16.0865 1.65201 15.0162 0.978968 13.6541C0.326323 12.2919 0 10.7459 0 9.01622C0 7.28649 0.326323 5.74054 0.978968 4.37838C1.63161 2.99459 2.5188 1.92432 3.64054 1.16757C4.78266 0.38919 6.03697 0 7.40344 0C8.38241 0 9.30019 0.194595 10.1568 0.583784C11.0134 0.951351 11.7374 1.42703 12.3289 2.01081V1.97838C12.3289 1.41621 12.5022 0.951351 12.8489 0.583784C13.1957 0.194595 13.6342 0 14.1644 0ZM7.9847 14.4324C9.31039 14.4324 10.3913 13.9243 11.2275 12.9081C12.0637 11.8703 12.4818 10.573 12.4818 9.01622C12.4818 7.45946 12.0637 6.16216 11.2275 5.12432C10.3913 4.08649 9.31039 3.56757 7.9847 3.56757C6.67941 3.56757 5.60867 4.08649 4.77247 5.12432C3.93626 6.16216 3.51816 7.45946 3.51816 9.01622C3.51816 10.573 3.92607 11.8703 4.74187 12.9081C5.57808 13.9243 6.65902 14.4324 7.9847 14.4324Z" fill="#5243C2"/>
                </svg>,
                tabData: {
                    firstTab: {
                        text: "Discover",
                        classes: "tab-item active",
                        tag: "intro",
                    },
                    secondTab: {
                        text: "Make Your Burger",
                        classes: "tab-item",
                        tag: "burger",
                    }
                },
                phoneLogo: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                        <path id="Vector" d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#FF4D4F"/>
                    </g></svg>,
                message: "Call Me Back",
                phoneNumber: "8 800 437-87-22",
                emoji: "/emoji.png",
                flag: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Ukraine">
                        <g clip-path="url(#clip0_1335_682)">
                            <rect id="Rectangle 7" x="1" y="1" width="10" height="5" fill="#3273D3"/>
                            <rect id="Rectangle 8" x="1" y="6" width="10" height="5" fill="#FFD018"/>
                        </g>
                        <rect x="0.5" y="0.5" width="11" height="11" rx="5.5" stroke="#F0F7FA"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1335_682">
                            <rect x="1" y="1" width="10" height="10" rx="5" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>,
            },
        }

    }

    render() {
        const {data, buttonClasses} = this.state;
        const {setActiveTab, getActiveTab} = this.props;



        return (
            <div className="navigation">
                <div className="header-left">
                    <div className="navigation-logo">{data.logo}</div>
                    <div className="tabs">
                        <button
                            onClick={() => setActiveTab(data.tabData.firstTab.tag)}
                            className={getActiveTab() === "intro" ? "tab-item active" : "tab-item"}>
                            {data.tabData.firstTab.text}
                        </button>
                        <button
                            onClick={() => setActiveTab(data.tabData.secondTab.tag)}
                            className={getActiveTab() === "burger" ? "tab-item active" : "tab-item"}>
                            {data.tabData.secondTab.text}
                        </button>
                    </div>
                </div>
                <div className="header-right">
                    <div className="contact-link">{data.phoneLogo}<a href="">{data.message}</a></div>
                    <div className="contact-number">{data.phoneNumber}</div>
                    <div className="emoji">
                        <img src={`${data.emoji}`} alt="emoji"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;