import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";


export default function BulkUpload(props) {
    const item = useLocation().state;

    const [cityFile, setCityFile] = React.useState("");
    const [societyFile, setSocietyFile] = React.useState("");

    const submitCity = () => {
        let formData = new FormData();
        formData.append("file", cityFile);
        const res = sendRequest(apis.base + apis.bulkUploadCity, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const submitSociety = () => {
        let formData = new FormData();
        formData.append("file", societyFile);
        const res = sendRequest(apis.base + apis.bulkUploadSociety, formData, ((res) => callback(res)), ((err) => console.log(err)));
    };

    const url = window.location.href;
    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Instructions</h5>
                    </div>
                    <div className="card-body">
                        <ol className="pl-3">
                            <li>Only CSV file are allowed.</li>
                            <li>First row need to keep blank or use for column name only.</li>
                            <li>All fields are must needed in csv file.</li>
                            <li><a href={process.env.PUBLIC_URL + '/csv_sample/cities.csv'} download="cities.csv"
                                   className="download-style">Download Sample File</a></li>
                        </ol>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5 className="panel-title">Bulk Cities Upload</h5>
                    </div>
                    <div className="card-body">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"
                                   name="select_file" data-allowed-file-extensions="csv" required=""
                                   accept=".csv"
                                   onChange={(event) => setCityFile(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xs" onClick={submitCity}>
                                Import Cities
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Instructions</h5>
                    </div>
                    <div className="card-body">
                        <ol className="pl-3">
                            <li>Only CSV file are allowed.</li>
                            <li>First row need to keep blank or use for column name only.</li>
                            <li>All fields are must needed in csv file.</li>
                            <li>fill the city id(Which is available in city list section) in city_id column of csv
                                file.
                            </li>
                            <li><a href={process.env.PUBLIC_URL + '/csv_sample/societies.csv'} download="societies.csv"
                                   className="download-style">Download Sample File</a></li>
                        </ol>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5 className="panel-title">Bulk Societies Upload</h5>
                    </div>
                    <div className="card-body">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"
                                   name="select_file" data-allowed-file-extensions="csv" required=""
                                   accept=".csv"
                                   onChange={(event) => setSocietyFile(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xs" onClick={submitSociety}>
                                Import Societies
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
