import './footer.css';

function Footer() {

    const data = {
        footerText: "2022. Make Your Burger",
        footerLinks: ["Privacy Policy", "Terms & Conditions"],
        footerPaymentLogos: [
            {
                img: <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Mastercard">
                        <path id="Left" fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.75 12.1569C10.5584 13.1852 9.01276 13.806 7.32377 13.806C3.55511 13.806 0.5 10.7154 0.5 6.90299C0.5 3.09057 3.55511 0 7.32377 0C9.01276 0 10.5584 0.620751 11.75 1.64903C12.9416 0.620751 14.4872 0 16.1762 0C19.9449 0 23 3.09057 23 6.90299C23 10.7154 19.9449 13.806 16.1762 13.806C14.4872 13.806 12.9416 13.1852 11.75 12.1569Z"
                              fill="#ED0006"/>
                        <path id="Right" fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.75 12.1569C13.2172 10.8908 14.1475 9.00681 14.1475 6.90299C14.1475 4.79917 13.2172 2.91517 11.75 1.64903C12.9416 0.620751 14.4872 0 16.1762 0C19.9449 0 23 3.09057 23 6.90299C23 10.7154 19.9449 13.806 16.1762 13.806C14.4872 13.806 12.9416 13.1852 11.75 12.1569Z"
                              fill="#F9A000"/>
                        <path id="Middle" fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.7501 1.64908C13.2172 2.91521 14.1476 4.79921 14.1476 6.90301C14.1476 9.00681 13.2172 10.8908 11.7501 12.1569C10.2829 10.8908 9.35254 9.00681 9.35254 6.90301C9.35254 4.7992 10.2829 2.91521 11.7501 1.64908Z"
                              fill="#FF5E00"/>
                    </g>
                </svg>
            },
            {
                img: <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="GooglePay">
                        <g id="Pay">
                            <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.5296 8.75809V5.73713H13.0888C13.7277 5.73713 14.267 5.52305 14.7066 5.10083L14.8121 4.99379C15.6152 4.11961 15.5624 2.75781 14.7066 1.94905C14.2787 1.52088 13.6926 1.28896 13.0888 1.30085H10.5859V8.75809H11.5296ZM11.5298 4.82132V2.21664H13.1126C13.4527 2.21664 13.7751 2.34747 14.0155 2.58534C14.5255 3.08487 14.5372 3.91741 14.0448 4.43478C13.8044 4.69049 13.4644 4.83321 13.1126 4.82132H11.5298ZM19.2142 4.05421C18.8097 3.67956 18.2587 3.48926 17.5612 3.48926C16.6644 3.48926 15.9903 3.82228 15.5448 4.48237L16.3772 5.01163C16.682 4.55968 17.0981 4.3337 17.6257 4.3337C17.9598 4.3337 18.2822 4.45859 18.5342 4.68456C18.7804 4.89865 18.9211 5.20788 18.9211 5.53495V5.75498C18.5577 5.55279 18.1005 5.44575 17.5378 5.44575C16.8813 5.44575 16.3537 5.60036 15.961 5.91554C15.5683 6.23072 15.369 6.64699 15.369 7.17626C15.3573 7.65794 15.5624 8.11584 15.9258 8.42508C16.2951 8.75809 16.764 8.9246 17.315 8.9246C17.9657 8.9246 18.4815 8.63321 18.8742 8.05043H18.9152V8.75809H19.8179V5.61226C19.8179 4.95217 19.6186 4.42885 19.2142 4.05421ZM16.6528 7.8185C16.4594 7.67578 16.3421 7.44386 16.3421 7.19409C16.3421 6.9146 16.4711 6.68267 16.7232 6.49832C16.9811 6.31397 17.3036 6.21882 17.6846 6.21882C18.2123 6.21288 18.6226 6.33181 18.9158 6.56968C18.9158 6.97406 18.7575 7.32492 18.4468 7.62226C18.1654 7.90771 17.7843 8.06827 17.3856 8.06827C17.1218 8.07421 16.8639 7.98501 16.6528 7.8185ZM21.846 11L24.9996 3.65578H23.9738L22.5143 7.31898H22.4967L21.002 3.65578H19.9762L22.0453 8.43102L20.873 11H21.846Z"
                                  fill="#3C4043"/>
                        </g>
                        <g id="G">
                            <path id="Blue"
                                  d="M8.27202 5.08298C8.27202 4.79159 8.24857 4.5002 8.20168 4.21475H4.22168V5.862H6.50183C6.40804 6.39127 6.10324 6.86701 5.65776 7.16434V8.23476H7.01764C7.81482 7.49142 8.27202 6.39127 8.27202 5.08298Z"
                                  fill="#4285F4"/>
                            <path id="Green"
                                  d="M4.22211 9.26948C5.35925 9.26948 6.32055 8.88889 7.01807 8.23475L5.65819 7.16433C5.27719 7.42599 4.79068 7.57466 4.22211 7.57466C3.12013 7.57466 2.18815 6.81942 1.85404 5.80847H0.453125V6.91457C1.16824 8.35963 2.62776 9.26948 4.22211 9.26948Z"
                                  fill="#34A853"/>
                            <path id="Yellow"
                                  d="M1.85401 5.8085C1.67814 5.27924 1.67814 4.70241 1.85401 4.1672V3.06705H0.452878C-0.150959 4.27424 -0.150959 5.70146 0.452878 6.90866L1.85401 5.8085Z"
                                  fill="#FBBC04"/>
                            <path id="Red"
                                  d="M4.22211 2.40099C4.82585 2.38909 5.40614 2.62102 5.8399 3.04324L7.04738 1.81821C6.27951 1.0927 5.27133 0.694267 4.22211 0.706161C2.62776 0.706161 1.16824 1.62196 0.453125 3.06702L1.85404 4.17312C2.18815 3.15623 3.12013 2.40099 4.22211 2.40099Z"
                                  fill="#EA4335"/>
                        </g>
                    </g>
                </svg>
            },
            {
                img: <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="PayPal">
                        <path id="Vector"
                              d="M3.23634 12.7688L3.45087 11.4063L2.97305 11.3952H0.691406L2.27705 1.34109C2.28189 1.31074 2.29795 1.28244 2.32132 1.26234C2.3447 1.24225 2.37469 1.23117 2.40586 1.23117H6.25307C7.53032 1.23117 8.4117 1.49695 8.87192 2.02154C9.08763 2.26763 9.22506 2.5248 9.29153 2.8078C9.36119 3.10476 9.36249 3.45954 9.29436 3.89226L9.28941 3.92384V4.2011L9.50523 4.32334C9.68694 4.41971 9.83121 4.53005 9.94196 4.65638C10.1266 4.86679 10.246 5.13421 10.2964 5.45125C10.3485 5.77733 10.3312 6.16533 10.246 6.60462C10.1475 7.10993 9.98836 7.55003 9.77348 7.91014C9.57572 8.24196 9.32388 8.51711 9.02494 8.73046C8.73945 8.93306 8.40024 9.0869 8.01676 9.18537C7.64508 9.28207 7.22146 9.33095 6.75675 9.33095H6.45733C6.24328 9.33095 6.03524 9.40805 5.87207 9.5463C5.70843 9.68739 5.60005 9.88008 5.56687 10.0909L5.54432 10.2136L5.16532 12.615L5.14809 12.7032C5.1436 12.7312 5.13581 12.7451 5.12435 12.7545C5.11408 12.763 5.09932 12.7688 5.08492 12.7688H3.23634Z"
                              fill="#253B80"/>
                        <path id="Vector_2"
                              d="M9.70805 3.95639C9.6966 4.0298 9.6835 4.10486 9.66874 4.18197C9.16129 6.78687 7.42558 7.68675 5.20864 7.68675H4.07992C3.80884 7.68675 3.58038 7.88362 3.53811 8.15104L2.96017 11.8162L2.79653 12.8551C2.76902 13.0307 2.90444 13.189 3.08154 13.189H5.0836C5.32068 13.189 5.52199 13.0167 5.5593 12.783L5.57902 12.6812L5.956 10.2892L5.98021 10.158C6.01704 9.92338 6.21882 9.75112 6.4559 9.75112H6.75532C8.69492 9.75112 10.2134 8.96361 10.6572 6.68474C10.8426 5.73277 10.7466 4.93789 10.256 4.37885C10.1076 4.21027 9.92341 4.07041 9.70805 3.95639Z"
                              fill="#179BD7"/>
                        <path id="Vector_3"
                              d="M9.17635 3.74412C9.09889 3.72156 9.01884 3.70105 8.93679 3.68259C8.85438 3.66455 8.76984 3.64855 8.68294 3.63461C8.37857 3.58539 8.04515 3.56201 7.68787 3.56201H4.67244C4.59818 3.56201 4.52769 3.57882 4.46453 3.60918C4.32544 3.67603 4.22213 3.8077 4.1971 3.96888L3.55553 8.03189L3.53711 8.15041C3.57938 7.88299 3.80784 7.68612 4.07892 7.68612H5.20764C7.42458 7.68612 9.16041 6.78583 9.66774 4.18134C9.68285 4.10423 9.6956 4.02918 9.70706 3.95577C9.57872 3.88768 9.43963 3.82943 9.28993 3.7798C9.25309 3.7675 9.21495 3.75561 9.17635 3.74412Z"
                              fill="#222D65"/>
                        <path id="Vector_4"
                              d="M4.19904 3.96916C4.22407 3.80796 4.3275 3.6763 4.46646 3.60986C4.5301 3.5795 4.60023 3.56269 4.67438 3.56269H7.68993C8.0472 3.56269 8.38062 3.58607 8.68488 3.63529C8.7719 3.64923 8.85643 3.66523 8.93884 3.68327C9.0209 3.70174 9.10083 3.72224 9.1784 3.74479C9.21689 3.75628 9.25502 3.76817 9.29233 3.78007C9.44204 3.8297 9.58113 3.88835 9.70947 3.95603C9.86047 2.99339 9.70829 2.33797 9.18785 1.74447C8.61404 1.0911 7.57835 0.811371 6.25317 0.811371H2.40584C2.13511 0.811371 1.90429 1.00824 1.86238 1.27607L0.259971 11.4336C0.228329 11.6345 0.383351 11.8159 0.585954 11.8159H2.96123L3.55758 8.03215L4.19904 3.96916Z"
                              fill="#253B80"/>
                    </g>
                </svg>
            },
            {
                img: <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Property 1=ApplePay">
                        <rect id="BASE" width="35" height="24" rx="4" fill="#F7F7F7"/>
                        <path id="ApplePay" fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.34621 8.93296C8.81625 8.97261 9.28629 8.69506 9.58007 8.34316C9.86895 7.98135 10.0599 7.49563 10.0109 7C9.59476 7.01983 9.08065 7.27755 8.78687 7.63936C8.51758 7.95161 8.28746 8.45715 8.34621 8.93296ZM13.9377 15.3167V7.5898H16.8021C18.2807 7.5898 19.3138 8.62071 19.3138 10.1274C19.3138 11.6341 18.2611 12.675 16.7629 12.675H15.1226V15.3167H13.9377ZM10.006 9.02712C9.59191 9.003 9.21406 9.15319 8.90886 9.2745C8.71246 9.35256 8.54615 9.41867 8.41962 9.41867C8.27763 9.41867 8.10445 9.34903 7.91001 9.27084L7.91001 9.27084L7.91 9.27084L7.91 9.27083C7.65521 9.16838 7.36392 9.05124 7.05845 9.05686C6.35829 9.06677 5.70709 9.46823 5.34966 10.1076C4.61522 11.3863 5.1587 13.2796 5.86866 14.3205C6.2163 14.8359 6.63248 15.4009 7.18086 15.3811C7.42212 15.3719 7.59566 15.2973 7.77526 15.2202C7.98203 15.1314 8.19683 15.0391 8.53223 15.0391C8.856 15.0391 9.0614 15.129 9.25858 15.2152C9.44606 15.2973 9.62611 15.376 9.89339 15.3712C10.4614 15.3613 10.8188 14.8557 11.1664 14.3403C11.5416 13.7871 11.7064 13.2471 11.7315 13.1652L11.7344 13.1557C11.7338 13.1551 11.7292 13.153 11.721 13.1492C11.5956 13.0911 10.637 12.6469 10.6278 11.4557C10.6186 10.4559 11.3881 9.94935 11.5093 9.86961L11.5093 9.86961C11.5166 9.86476 11.5216 9.86149 11.5238 9.85978C11.0342 9.12625 10.2704 9.04695 10.006 9.02712ZM21.478 15.3761C22.2223 15.3761 22.9126 14.9945 23.226 14.3898H23.2505V15.3167H24.3472V11.4706C24.3472 10.3554 23.4659 9.63675 22.1097 9.63675C20.8513 9.63675 19.921 10.3653 19.8868 11.3665H20.9541C21.0423 10.8907 21.478 10.5784 22.0754 10.5784C22.8 10.5784 23.2064 10.9204 23.2064 11.5499V11.9761L21.7277 12.0653C20.3519 12.1496 19.6077 12.7196 19.6077 13.7108C19.6077 14.712 20.3764 15.3761 21.478 15.3761ZM21.7962 14.4592C21.1646 14.4592 20.7631 14.1519 20.7631 13.6811C20.7631 13.1954 21.1499 12.9129 21.8892 12.8683L23.2063 12.784V13.2202C23.2063 13.9438 22.5992 14.4592 21.7962 14.4592ZM27.9851 15.619C27.5102 16.9721 26.9667 17.4181 25.8112 17.4181C25.723 17.4181 25.4293 17.4082 25.3607 17.3884V16.4616C25.4342 16.4715 25.6153 16.4814 25.7084 16.4814C26.2323 16.4814 26.526 16.2584 26.7072 15.6785L26.8149 15.3365L24.8074 9.7111H26.0462L27.4416 14.2759H27.4661L28.8616 9.7111H30.066L27.9851 15.619ZM15.1225 8.60088H16.4886C17.5168 8.60088 18.1044 9.15599 18.1044 10.1324C18.1044 11.1088 17.5168 11.6688 16.4837 11.6688H15.1225V8.60088Z"
                              fill="black"/>
                    </g>
                </svg>
            },
            {
                img: <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Etherium">
                        <ellipse id="Ellipse 1" cx="8.435" cy="7.935" rx="7.935" ry="7.935" fill="#6481E7"/>
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.52832 2.35181V10.362L12.0877 8.25784L8.52832 2.35181Z" fill="#C1CCF5"/>
                        <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.96875 8.25784L8.5281 10.362V2.35181L4.96875 8.25784Z" fill="white"/>
                        <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.52833 6.64008L4.96875 8.25775L8.5281 10.3619L12.0877 8.25798L8.52833 6.64008Z"
                              fill="#8299EC"/>
                        <path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.52832 11.0359V13.9491L12.09 8.93289L8.52832 11.0359Z" fill="#C1CCF5"/>
                        <path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.52833 6.64008L4.96875 8.25775L8.5281 10.3619L8.52833 6.64008Z" fill="#C1CCF5"/>
                        <path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.96875 8.93289L8.5281 13.9489V11.0359L4.96875 8.93289Z" fill="white"/>
                    </g>
                </svg>
            },
            {
                img: <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="payment-logos">
                        <rect id="BASE" width="35" height="24" rx="4" fill="#EBF3FA"/>
                        <path id="polygon9" d="M14.9741 16.0828H12.9951L14.2329 8.4292H16.2118L14.9741 16.0828Z"
                              fill="#00579F"/>
                        <path id="path11"
                              d="M22.1473 8.61637C21.757 8.46151 21.1379 8.29053 20.3723 8.29053C18.418 8.29053 17.0418 9.33267 17.0334 10.8226C17.0172 11.9219 18.0187 12.5325 18.7678 12.899C19.5334 13.2735 19.7937 13.518 19.7937 13.8518C19.7859 14.3646 19.175 14.6009 18.6053 14.6009C17.8152 14.6009 17.3918 14.4791 16.7485 14.1938L16.4879 14.0715L16.2109 15.7896C16.6751 16.001 17.5302 16.1887 18.418 16.1969C20.4945 16.1969 21.8464 15.1709 21.8624 13.5831C21.8703 12.7119 21.3414 12.0443 20.2013 11.4988C19.5091 11.1486 19.0852 10.9124 19.0852 10.5541C19.0933 10.2284 19.4437 9.89475 20.2251 9.89475C20.8684 9.87841 21.3411 10.0331 21.6992 10.1878L21.8782 10.2691L22.1473 8.61637Z"
                              fill="#00579F"/>
                        <path id="path13"
                              d="M24.7786 13.3714C24.9416 12.9317 25.5687 11.23 25.5687 11.23C25.5605 11.2463 25.7314 10.7822 25.8291 10.4972L25.9674 11.1567C25.9674 11.1567 26.3421 12.9887 26.4235 13.3714C26.1142 13.3714 25.1695 13.3714 24.7786 13.3714ZM27.2214 8.4292H25.6907C25.2186 8.4292 24.86 8.5675 24.6563 9.06422L21.7168 16.0827H23.7933C23.7933 16.0827 24.1351 15.1381 24.2086 14.9346C24.4364 14.9346 26.4564 14.9346 26.7495 14.9346C26.8063 15.2033 26.9856 16.0827 26.9856 16.0827H28.8179L27.2214 8.4292Z"
                              fill="#00579F"/>
                        <path id="path15"
                              d="M11.342 8.4292L9.40391 13.6482L9.19213 12.5897C8.83382 11.3684 7.71008 10.0414 6.45605 9.38162L8.23126 16.0747H10.324L13.4346 8.4292H11.342Z"
                              fill="#00579F"/>
                        <path id="path17"
                              d="M7.60426 8.4292H4.42027L4.3877 8.58384C6.8714 9.21897 8.51632 10.7499 9.19214 12.5901L8.49997 9.07255C8.38602 8.58373 8.03583 8.44532 7.60426 8.4292Z"
                              fill="#FAA61A"/>
                    </g>
                </svg>
            }
        ],
    }

    const links = data.footerLinks.map((item, i) => {
        if (i === 0) {
            return (
                <div>
                    <a href="" className="footer-link">{item}</a>
                </div>
            )
        } else {
            return (
                <div>
                    <span className="separator">|</span>
                    <a href="" className="footer-link">{item}</a>
                </div>
            )
        }

    })

    const paymentMethods = data.footerPaymentLogos.map(item => {
        return (
            <a href="">{item.img}</a>
        )
    })

    return (
        <div className="footer">
            <div className="footer-left">
                <p>{data.footerText}</p>
                {links}
            </div>
            <div className="footer-right">
                {paymentMethods}
            </div>
        </div>
    );
}

export default Footer;