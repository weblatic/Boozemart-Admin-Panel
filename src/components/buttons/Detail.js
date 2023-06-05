import React from "react";
import {useLocation} from "react-router";
import CustomImage from "../CustomImage";
import Modal from "@mui/material/Modal/Modal";
import {Link} from "react-router-dom";

export default function Detail(props) {


    const url = window.location.href;
    const [data, setData] = React.useState({
        modalState: false
    });


    const closeModal = () => {
        setData({...data, modalState: false});
    };

    const showContent = (key) => {
        if (data.modalState) {
            if (isImageKey(key)) {
                return <CustomImage
                    src={props.item[props.type[key]]}
                />
            } else {
                return <span>{props.item[props.type[key]]}</span>
            }
        }
    };

    const isImageKey = (key) => {
        let imageArr = props.image;
        for (let i = 0; i < imageArr.length; i++) {
            if (imageArr[i].toLowerCase() === key.toLowerCase()) {
                return true;
            }
        }
        return false;
    };

    const showDetail = () => {
        if (props.modalTitle === undefined || props.type === undefined) {
            return (
                <Link
                    to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/detail/" + props.item[props.primaryKey]}
                    state={props.item}
                    className="btn btn-primary mr-1">
                    <i className=""/>Detail</Link>

            )
        } else {
            return (
                <React.Fragment>
                        <span onClick={() => setData({...data, modalState: true})} className="btn btn-primary mr-1">
                        <i className=""/>Detail</span>
                    <Modal
                        open={data.modalState}
                        onClose={closeModal}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>{props.modalTitle}</h4>
                                </div>
                                <div className="modal-body">
                                    {Object.keys(props.type).map((key) => (
                                        <div key={key}>
                                            <span><b>{key} : </b></span>
                                            {showContent(key)}
                                        </div>
                                    ))}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </React.Fragment>
            )

        }
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
            {showDetail()}
        </React.Fragment>
    )

}