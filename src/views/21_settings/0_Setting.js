import React from "react";

import AppNameEtc from "./01_AppNameEtc";
import Currency from "./02_Currency";
import Referral from "./03_Referral";
import SMS from "./04_SMS";
import FireBase from "./05_FireBase";
import FCM from "./06_FCM";
import Payment from "./07_Payment";
import Map from "./08_Map";
import Driver from "./09_Driver";
import AppLink from "./10_AppLink";
import ImagesSpace from "./11_ImagesSpace";
import AppNotice from "./12_AppNotice";
import TimeSlot from "./13_TimeSlot";
import MinSetting from "./14_MinSetting";

import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';


export default function Setting(props) {

    const Scroll = require('react-scroll');
    const Link = Scroll.Link;


    const handleSetActive = (to) => {
        console.log(to);
    };

    const offset = -75;
    const duration=300;

    return (

        <div className="row">
            <div className="col-md-9">
                <Element name="global">
                    <AppNameEtc/>
                    <hr/>
                </Element>
                <Element name="currency">
                    <Currency/>
                    <hr/>
                </Element>
                <Element name="referral">
                    <Referral/>
                    <hr/>
                </Element>
                <Element name="sms">
                    <SMS/>
                    <hr/>
                </Element>
                <Element name="fireBase">
                    <FireBase/>
                    <hr/>
                </Element>
                <Element name="fcm">
                    <FCM/>
                    <hr/>
                </Element>
                <Element name="payment">
                    <Payment/>
                    <hr/>
                </Element>
                <Element name="map">
                    <Map/>
                    <hr/>
                </Element>
                <Element name="driver">
                    <Driver/>
                    <hr/>
                </Element>
                <Element name="appLink">
                    <AppLink/>
                    <hr/>
                </Element>
                <Element name="image">
                    <ImagesSpace/>
                    <hr/>
                </Element>
                <Element name="appNotice">
                    <AppNotice/>
                    <hr/>
                </Element>
                <Element name="timeSlot">
                    <TimeSlot/>
                    <hr/>
                </Element>
                <Element name="minSetting">
                    <MinSetting/>
                </Element>
            </div>
            <div className="col-md-3">
                <div className="navbar navbar-sticky d-none d-xl-block">
                    <div className="nav">
                        <Link className="nav-link" activeClass="active" to="global" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>Global Settings</Link>
                        <Link className="nav-link" activeClass="active" to="sms" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>SMS/OTP Settings</Link>
                        <Link className="nav-link" activeClass="active" to="fcm" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>FCM Keys</Link>
                        <Link className="nav-link" activeClass="active" to="payment" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>Payment Mode</Link>
                        <Link className="nav-link" activeClass="active" to="map" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>MAP Settings</Link>
                        <Link className="nav-link" activeClass="active" to="driver" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>Driver Incentive(Per Order)</Link>
                        <Link className="nav-link" activeClass="active" to="appLink" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>App Link</Link>
                        <Link className="nav-link" activeClass="active" to="image" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>Images Store</Link>
                        <Link className="nav-link" activeClass="active" to="appNotice" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>App Notice</Link>
                        <Link className="nav-link" activeClass="active" to="timeSlot" spy={true} smooth={true}
                              offset={offset}
                              duration={duration}
                              onSetActive={handleSetActive}>Time Slot</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}