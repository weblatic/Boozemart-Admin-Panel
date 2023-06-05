import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import MultiSelect from "../../components/MultiSelect";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function TrendingSearch(props) {
    const item = useLocation().state;

    const url = window.location.href;

    const [product, setProduct] = React.useState([]);
    const [productSelected, setProductSelected] = React.useState([]);

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res2 = sendRequest(apis.base + apis.trendingSearchProductSelected, formData, ((res) => callback2(res)));
    }, []);

    const callback1 = (res) => {
        setProduct(res.data)
    };


    const callback2 = (res) => {
        setProductSelected(res.data);
        let result = res.data;
        let where = [];
        for (let i = 0; i < result.length; i++) {
            where.push('varient_id!=' + result[i].varient_id)
        }

        let body = {
            method: "get",
            where: where
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.trendingSearchProduct, formData, ((res) => callback1(res)));
    };

    const contain = (item) => {
        for (let i = 0; i < productSelected.length; i++) {
            if (productSelected[i].varient_id === item.varient_id) {
                return true;
            }
        }
        return false;
    };

    const submit = () => {
        for (let i = 0; i < data.length - 1; i++) {
            let body = {
                method: "add",
                data: {
                    varient_id: data[i].varient_id
                }
            };
            let formData = new FormData();
            formData.append("payload", JSON.stringify(body));
            const res1 = sendRequest(apis.base + apis.trendingSearchProductSelected, formData, ((res) => (res)));
        }
        let body = {
            method: "add",
            data: {
                varient_id: data[data.length - 1].varient_id
            }
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res1 = sendRequest(apis.base + apis.trendingSearchProductSelected, formData, ((res) => callbackSubmit(res)));
    };

    const callbackSubmit = () => {
        window.location.href = url;
    };

    const selectData = (checked, eachData) => {
        if (checked) {
            let d = data;
            d.push(eachData);
            setData([...d])
        } else {
            setData([...data.filter(item => item !== eachData)])
        }
    };

    const selectAll = (checked) => {
        if (checked) {
            let dataAdded = data;
            for (let i = 0; i < product.length; i++) {
                if (!dataAdded.includes(product[i])) {
                    dataAdded.push(product[i]);
                }
            }
            setData([...dataAdded]);
        } else {
            setData([]);
        }
    };


    return (
        <div className="row">
            <div className="col-5">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">Select Products</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <MultiSelect
                                    title={"Select Products Which You have to set on Trending Search"}
                                    data={product}
                                    dataSelected={data}
                                    selectAll={(checkState) => selectAll(checkState)}
                                    selectData={(checkState, item) => selectData(checkState, item)}
                                    name={"product_name"}
                                />
                            </div>
                        </div>
                        <button onClick={submit} type="submit"
                                className="btn btn-primary pull-center">
                            Submit
                        </button>

                    </div>
                </div>
            </div>
            <div className="col-7">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">Selected Products</h4>
                    </div>

                    <div className="container"><br/>
                        <CustomTable
                            type={{
                                "PRODUCT NAME": 'product_name',
                            }}
                            typeEx={{}}
                            style={{}}
                            image={["image"]}
                            button={{
                                "ACTION": [buttonType.delete],
                            }}
                            buttonEx={{}}
                            searchField={true}
                            data={productSelected}
                            primaryKey={"trend_id"}
                            api={apis.trendingSearchProductSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}