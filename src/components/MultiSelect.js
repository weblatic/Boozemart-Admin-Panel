import React from "react";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Popper from "@mui/material/Popper/Popper";
import Fade from "@mui/material/Fade/Fade";
import Paper from "@mui/material/Paper/Paper";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";

export default function MultiSelect(props) {

    const [data, setData] = React.useState({
        open: false,
        anchorEl: null
    });

    const getSelected = () => {
        let maxLength = 30;
        let str = "";
        if (props.dataSelected.length > 0) {
            for (let i = 0; i < props.dataSelected.length - 1; i++) {
                str += props.dataSelected[i][props.name] + ", ";
            }
            str += props.dataSelected[props.dataSelected.length - 1][props.name];
            if (str.length > maxLength) {
                str = str.slice(0, maxLength) + "...";
            }
        }
        return str;
    };

    const getCheckState = (val) => {
        for (let i = 0; i < props.dataSelected.length; i++) {
            if (JSON.stringify(props.dataSelected[i]) === JSON.stringify(val)) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className="form-group">
            <label>{props.title}</label>
            <div
                className={Boolean(data.anchorEl) ? "form-control input-active" : "form-control "}
                onClick={(event) => (setData({...data, anchorEl: event.currentTarget, open: !data.open}))}
            >
                <div className="row ">
                    <div className="col-9 text-left">
                        <span>{getSelected()}</span>
                    </div>
                    <div className="col-3 text-right">
                                        <span style={{maxInlineSize: 1}}
                                              className={props.dataSelected.length !== 0 ? " bg-cyan pr-1 pl-1" : ""}>
                                            {props.dataSelected.length !== 0 ? props.dataSelected.length : ""}
                                            </span>
                        <span className="caret ml-1"/>
                    </div>
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
                            <div className="multi-select-scroll">
                                <div>
                                    <FormControlLabel
                                        className="ml-2 mb-0"
                                        control={
                                            <Checkbox
                                                onChange={(event) => props.selectAll(event.target.checked)}
                                                checked={props.dataSelected.length === props.data.length}
                                            />
                                        }
                                        label={"Select All"}/>
                                </div>
                                <hr className="mb-1 mt-1"/>
                                {props.data.map((val, index) =>
                                    <div key={index}>
                                        <FormControlLabel
                                            className="ml-2 mb-0"
                                            control={
                                                <Checkbox
                                                    onChange={(event) => props.selectData(event.target.checked, val)}
                                                    checked={getCheckState(val)}/>
                                            }
                                            label={val[props.name]}/>
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </div>

    )
}