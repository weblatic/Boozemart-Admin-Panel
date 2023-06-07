import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import {sendRequest} from "../api/sendRequest";
import {apis} from "../configuration/configurationApi";
import Scroll from "react-scroll";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

const AuthRouter = ({children}) => {
    // const user = useSelector((state) => state.user);
    let location = useLocation();
    const [data, setData] = React.useState({
        isSimpleNav: false,
        language: ""
    });

    const [logo, setLogo] = React.useState({
        favicon: "",
        footer_text: "",
        icon: "",
        last_loc: "",
        live_chat: "",
        name: "",
        number_limit: 0,
        set_id: 0
    });

    const languages = ["English", "Bulgarian", "Hindi", "Chinese"];

    const setLanguage = (lang) => {
        setData({...data, language: lang});
    };


    React.useEffect(() => {
        setData({...data, language: languages[0]});
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.logo, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setLogo(res.data[0])
    };

    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const rawUser = sessionStorage.getItem("user");
    if (rawUser) {
        const user = JSON.parse(sessionStorage.getItem("user"));

        if (user) {
            const decodedJwt = parseJwt(user.remember_token);
            console.log("decodedJwt:", decodedJwt);

            if (decodedJwt.exp * 1000 < Date.now()) {
                console.log("return login page");
                return <Navigate to="/login" state={{from: location}} replace/>
            } else {
                return (

                    <div className={data.isSimpleNav ? "app app-sidebar-minified" : "app"}>
                        <div className="app-header">
                            <Header
                                setSimpleNavState={() => setData({...data, isSimpleNav: !data.isSimpleNav})}
                                language={data.language}
                                logo={logo}
                            />
                        </div>
                        <div className="app-sidebar">
                            <Navigation
                                isSimpleNav={data.isSimpleNav}
                                language={data.language}
                            />
                        </div>
                        <div className="app-content">
                            <div>
                                <ContentHeader
                                    logo={logo}
                                    languages={languages}
                                    setLanguage={(lang) => setLanguage(lang)}
                                />
                            </div>
                            <div className="container-fluid">
                                {children}
                            </div>
                        </div>
                        <div className="app app-footer-fixed">
                            <Footer
                                logo={logo}
                                language={data.language}
                            />
                        </div>
                        <div onClick={scrollToTop} className="btn-scroll-top">
                            <i className="fa fa-arrow-up"/>
                        </div>
                    </div>
                )
            }
        } else {
            console.log("return login page");
            return <Navigate to="/login" state={{from: location}} replace/>
        }
    } else {
        console.log("return login page");
        return <Navigate to="/login" state={{from: location}} replace/>
    }
};

export default AuthRouter;