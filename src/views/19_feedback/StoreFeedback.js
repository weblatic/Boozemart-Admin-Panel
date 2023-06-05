import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function StoreFeedback(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.storeFeedbackList, formData, ((res) => callback(res)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Store Feedback</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "store": 'store_name',
                        "feedback": 'query',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={[]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.storeFeedbackList} primaryKey={"id"}/>

            </div>
        </div>

    )
}
