import React from "react";
import {Link} from "react-router-dom";
import {routers} from "../configuration/configurationUI";
import Popper from "@mui/material/Popper/Popper";
import Fade from "@mui/material/Fade/Fade";
import Paper from "@mui/material/Paper/Paper";
import CustomImage from "./CustomImage";

export default function Header(props) {

    const [data, setData] = React.useState({
        anchorEl: null,
        open: false
    });

    const logout = () => {
        setData({...data, open: false, anchorEl: null,});
        sessionStorage.removeItem("user");
        window.location.href = "/";
    };


    return (
        <div className="app-header">
            <div className="brand" onClick={(event) => setData({...data, open: false})}>
                <div className="desktop-toggler">
                    <button onClick={props.setSimpleNavState} className="menu-toggler">
                        <span className="bar"/>
                        <span className="bar"/>
                    </button>
                </div>

                <Link href="#" className="brand-logo">
                    <CustomImage src={props.logo.icon} alt=""  className="width-20 height-20"/>
                </Link>
            </div>
            <div className="menu">
                <form className="menu-search" onClick={(event) => setData({...data, open: false})}/>
                <div className="menu-item text-right"
                     onClick={(event) => setData({...data, open: !data.open, anchorEl: event.currentTarget})}
                     style={{cursor: "pointer"}}>
                    <div className="menu-link">
                        <div className="menu-img online">
                            <CustomImage src={props.logo.icon} alt=""  className="width-30 height-30"/>
                        </div>
                        <div className="menu-text">{JSON.parse(sessionStorage.getItem("user")).email}</div>
                    </div>
                </div>
                <Popper
                    open={data.open}
                    anchorEl={data.anchorEl}
                    placement="bottom-start"
                    transition>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <div className="text-right" style={{zIndex:"100"}}>
                                    <Link to={routers.profile} className="dropdown-item d-flex align-items-center"
                                          onClick={(event) => setData({...data, open: false})}
                                    >Edit Profile
                                        <i className="fa fa-user-circle fa-fw ml-auto text-gray-400 f-s-16"/>
                                    </Link>
                                    <Link to={routers.changePassword}
                                          className="dropdown-item d-flex align-items-center"
                                          onClick={(event) => setData({...data, open: false})}
                                    >
                                        Change Password
                                        <i className="fa fa-key fa-fw ml-auto text-gray-400 f-s-16"/>
                                    </Link>
                                    <Link to={routers.globalSetting}
                                          className="dropdown-item d-flex align-items-center"
                                          onClick={(event) => setData({...data, open: false})}
                                    >Admin Setting
                                        <i className="fa fa-wrench fa-fw ml-auto text-gray-400 f-s-16"/>
                                    </Link>
                                    < div className="dropdown-divider"/>
                                    <Link to={routers.login} className="dropdown-item d-flex align-items-center"
                                          onClick={logout}>
                                        Log Out
                                        <i className="fa fa-toggle-off fa-fw ml-auto text-gray-400 f-s-16"/>
                                    </Link>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        </div>
    )
}