import React from "react";
import {Link, NavLink} from "react-router-dom";
import Collapse from "@mui/material/Collapse/Collapse";
import Popper from "@mui/material/Popper/Popper";
import Fade from "@mui/material/Fade/Fade";
import Paper from "@mui/material/Paper/Paper";


export default function NavItem(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = (el) => {
        setAnchorEl(el);
        props.setOpenIndex(true);
    };

    const openOrClose = (el) => {
        setAnchorEl(el);
        props.setOpenIndex(!props.open);
    };

    const close = (el) => {
        setAnchorEl(null);
        props.setOpenIndex(false);
    };

    if (Object.keys(props.tabs).length > 0) {
        if (props.isSimpleNav) {
            return (
                <div className="menu-item">
                    <div className="menu-link"
                         onMouseEnter={(event) => open(event.currentTarget)}>
                        <span className="menu-icon"><i className={props.icon}/></span>
                        <span className="menu-caret"><b className="fa fa-caret-down"/></span>
                    </div>
                    <Popper
                        open={props.open}
                        anchorEl={anchorEl}
                        placement="right-start"
                        transition>
                        {({TransitionProps}) => (
                            <div className="ml-3">
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        {Object.keys(props.tabs).map((val, index) => (
                                            <NavLink key={index} onClick={(event) => close(event.currentTarget)}
                                                     to={props.tabs[Object.keys(props.tabs)[index]]}
                                                     className="dropdown-item d-flex align-items-center"
                                                     activeclassname="active">
                                                    <span
                                                        className="menu-text">{Object.keys(props.tabs)[index]}</span>
                                            </NavLink>
                                        ))}
                                    </Paper>
                                </Fade>
                            </div>
                        )}
                    </Popper>
                </div>
            )
        } else {
            return (
                <div className="menu-item">
                    <div className="menu-link"
                         onClick={(event) => openOrClose(event.currentTarget)}>
                        <span className="menu-icon"><i className={props.icon}/></span>
                        <span className="menu-text">{props.title}</span>
                        <span className="menu-caret"><b className="fa fa-caret-down"/></span>
                    </div>
                    <Collapse
                        in={props.open}
                        timeout="auto"
                        className="collapse-style"
                        unmountOnExit>
                        <div className="collapse-group">
                            {Object.keys(props.tabs).map((val, index) => (
                                <NavLink key={index} to={props.tabs[Object.keys(props.tabs)[index]]}
                                         className="menu-link" activeclassname="active">
                                    <span className="menu-text">{Object.keys(props.tabs)[index]}</span>
                                </NavLink>
                            ))}
                        </div>
                    </Collapse>
                </div>
            )
        }
    } else {
        return (
            <div className="menu-item">
                <NavLink to={props.mainTab} className="menu-link"
                         onClick={(event) => close(event.currentTarget)}
                >
                    <span className="menu-icon"><i className={props.icon}/></span>
                    {props.isSimpleNav ? "" : (
                        <span className="menu-text">{props.title}</span>
                    )}
                </NavLink>
            </div>
        )
    }
}