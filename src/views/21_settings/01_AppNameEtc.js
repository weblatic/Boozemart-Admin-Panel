import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import CustomImage from "../../components/CustomImage";

export default function AppNameEtc(props) {

    const url = window.location.href;
    const [logo, setLogo] = React.useState({
        favicon: "",
        footer_text: "",
        icon: "",
        last_loc: 0,
        live_chat: "",
        name: "",
        number_limit: 0,
        set_id: 0
    });

    const [countryCode, setCountryCode] = React.useState({
        code_id: 0,
        country_code: 0
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.logo, formData, ((res) => callback(res)), ((err) => console.log(err)));
        const res = sendRequest(apis.base + apis.countryCode, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setLogo(res.data[0])
    };
    const callback1 = (res) => {
        setCountryCode(res.data[0])
    };
    const [image, setImage] = React.useState("");
    const [favicon, setFavicon] = React.useState("");
    const submitNameEtc = () => {
        let body = {
            method: "update",
            data: logo,
            where: ["set_id=" + logo.set_id]
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        formData.append("icon", image);
        formData.append("favicon", favicon);
        const res = sendRequest(apis.base + apis.logo, formData, ((res) => (res)), ((err) => console.log(err)));
        let body1 = {
            method: "update",
            data: countryCode,
            where: ["code_id=" + countryCode.code_id]
        };
        let formData1 = new FormData();
        formData1.append("payload", JSON.stringify(body1));
        const res1 = sendRequest(apis.base + apis.countryCode, formData1, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
    };

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">App Name | Site Logo | Favicon | Country Code</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>App Name</label>
                            <input type="text" value={logo.name}
                                   onChange={(event) => setLogo({...logo, name: event.target.value})}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Country Code</label>
                            <input type="number" value={countryCode.country_code}
                                   onChange={(event) => setCountryCode({
                                       ...countryCode,
                                       country_code: event.target.value
                                   })}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Phone Number Length</label>
                            <input type="number" value={logo.number_limit}
                                   onChange={(event) => setLogo({
                                       ...logo,
                                       number_limit: event.target.value
                                   })}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Last Location App</label>
                            <select value={logo.last_loc}
                                    onChange={(event) => setLogo({
                                        ...logo,
                                        last_loc: event.target.value
                                    })}
                                    className="form-control">
                                <option value={1}>Save</option>
                                <option value={0}>Don't Save</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <CustomImage src={logo.icon} className="height-100 width-100"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group" style={{verticalLine: "bottom"}}>
                            <CustomImage src={logo.favicon} className="height-50 width-50"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}/>
                            <label className="custom-file-label" htmlFor="customFile">Site Log</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setFavicon(event.target.files[0])}/>
                            <label className="custom-file-label" htmlFor="customFile">Favicon</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Footer Text</label>
                            <input type="text" value={logo.footer_text}
                                   onChange={(event) => setLogo({
                                       ...logo,
                                       footer_text: event.target.value
                                   })}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Minimum Days</label>
                            <select value={logo.live_chat}
                                    onChange={(event) => setLogo({
                                        ...logo,
                                        live_chat: event.target.value
                                    })}
                                    className="form-control">
                                <option value={1}>ON</option>
                                <option value={0}>OFF</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onClick={submitNameEtc} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>
            </div>
        </div>
    )
}