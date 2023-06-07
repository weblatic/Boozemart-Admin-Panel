import axios from "axios";
import {base_url} from "../configuration/configurationApi";
import authHeader from "../auth/auth-header";

const client = axios.create({
    baseURL: base_url
});

export function sendRequest(url, formData, callback, errCallback) {
    client
        .post(url, formData, {headers: authHeader()})
        .then((response) => {
            callback(response);
        }).catch(error => {
            errCallback(error)
        }
    );
}


