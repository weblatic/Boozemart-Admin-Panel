import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AboutUs(props) {


    const [description, setDescription] = React.useState("");
    const [aboutId, setAboutId] = React.useState("");

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.aboutUs, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setAboutId(res.data[0].about_id);
        setDescription(res.data[0].description);
    };

    const url = window.location.href;

    const submit = () => {
        let body = {
            method: "update",
            where: ["about_id=" + aboutId],
            data: {description: description}
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.aboutUs, formData, ((res) => callback1(res)), ((err) => console.log(err)));
    };

    const callback1 = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">About Us</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={(event, editor) => {
                            const d = editor.getData();
                            setDescription(d);
                        }}
                    />

                </div>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center">
                    Submit
                </button>

            </div>
        </div>

    )
}