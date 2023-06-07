import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import dashboardImg from "../../assets/img/page/dashboard.svg";
import Link from "@mui/material/Link/Link";
import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";


export default function Home(props) {

    const [data, setData] = React.useState({
        admin_earnings: "",
        store_earnings: "",
        diff_can: "",
        diff_ord: "",
        diff_pen: "",
        diff_user: "",
        difference: "",
        last_week: "",
        last_week_can: "",
        last_week_ord: "",
        last_week_pen: "",
        last_week_user: "",
        on_going: [],
        this_week: "",
        this_week_can: "",
        this_week_ord: "",
        this_week_pen: "",
        this_week_user: "",
        top_selling: [],
    });

    React.useEffect(() => {
        let body = {
            method: "get",
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.home, formData, ((res) => callback(res)), ((err) => console.log(err)));
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    return (
        <div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card text-white-transparent-7 mb-3 overflow-hidden">
                        <div className="card-img-overlay d-block d-lg-none bg-blue rounded"/>
                        <div className="card-img-overlay d-none d-md-block bg-blue rounded dashboard-first"/>

                        <div className="card-img-overlay d-none d-md-block bottom-0 top-auto">
                            <div className="row">
                                <div className="col-md-8 col-xl-6"/>
                                <div className="col-md-4 col-xl-6 mb-n2">
                                    <img src={dashboardImg}
                                         alt="" className="d-block ml-n3 mb-5 img1"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-body position-relative">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="d-flex">
                                        <div className="mr-auto">
                                            <h5 className="text-white-transparent-8 mb-3">This Week Earning</h5>
                                            <h3 className="text-white mt-n1 mb-1">{data.this_week}</h3>
                                            <div className="mb-1 text-white-transparent-6 text-truncate">
                                                <i className={data.difference >= 0 ? "fa fa-caret-up" : "fa fa-caret-down"}/>
                                                <b> {Math.abs(data.difference)} % </b>
                                                {data.difference >= 0 ? "increase " : "decrease "}
                                                compare to last week
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                    </hr>


                                    <div className="row">
                                        <div className="col-6 col-lg-5">
                                            <div className="mt-1">
                                                <i className="fa fa-fw fa-shopping-bag fs-28px text-black-transparent-5"/>
                                            </div>
                                            <div className="mt-1">
                                                <div>Store Earnings</div>
                                                <div
                                                    className="font-weight-600 text-white">{data.store_earnings}</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-5">
                                            <div className="mt-1">
                                                <i className="fa fa-fw fa-retweet fs-28px text-black-transparent-5"/>
                                            </div>
                                            <div className="mt-1">
                                                <div>Admin Earnings</div>
                                                <div
                                                    className="font-weight-600 text-white">{data.admin_earnings}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="hr-transparent bg-white-transparent-2 mt-3 mb-3">
                                    </hr>
                                    <div className="mt-3 mb-2">
                                        <Link to={"/"}
                                              className="btn btn-yellow btn-rounded btn-sm pl-5 pr-5 pt-2 pb-2 fs-14px font-weight-600 text-black">
                                            <i className="fa fa-wallet mr-2 ml-n2"/>Go To Store Earnings
                                        </Link>
                                    </div>
                                    <div className="fs-12px">
                                        It Takes You To The Store Earnings Section.
                                    </div>
                                </div>

                                <div className="col-md-4 d-none d-md-block block-style"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <div
                                className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-orange min-height-202">

                                <div className="card-body position-relative">
                                    <h5 className="text-white-transparent-8 mb-3 fs-16px">New Orders</h5>
                                    <h3 className="text-white mt-n1 mb-1">{data.this_week_ord}</h3>
                                    <div className="progress bg-black-transparent-5 mb-2 height-6">
                                        <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                    </div>
                                    <div>
                                        <div className="text-white-transparent-8 mb-4">
                                            <div className="mb-1 text-white-transparent-6 text-truncate">
                                                <i className={data.diff_ord >= 0 ? "fa fa-caret-up" : "fa fa-caret-down"}/>
                                                <b> {Math.abs(data.diff_ord)} % </b>
                                                {data.diff_ord >= 0 ? "increase " : "decrease "}
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-teal min-height-202">

                                <div className="card-body position-relative">
                                    <h5 className="text-white-transparent-8 mb-3 fs-16px">Cancelled Orders</h5>
                                    <h3 className="text-white mt-n1 mb-1">{data.this_week_can}</h3>
                                    <div className="progress bg-black-transparent-5 mb-2 height-6">
                                        <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                    </div>
                                    <div>
                                        <div className="text-white-transparent-8 mb-4">
                                            <div className="mb-1 text-white-transparent-6 text-truncate">
                                                <i className={data.diff_can >= 0 ? "fa fa-caret-up" : "fa fa-caret-down"}/>
                                                <b> {Math.abs(data.diff_can)} % </b>
                                                {data.diff_can >= 0 ? "increase " : "decrease "}
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div
                                className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-pink min-height-202">

                                <div className="card-body position-relative">
                                    <h5 className="text-white-transparent-8 mb-3 fs-16px">Pending Orders</h5>
                                    <h3 className="text-white mt-n1 mb-1">{data.this_week_pen}</h3>
                                    <div className="progress bg-black-transparent-5 mb-2 height-6">
                                        <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                    </div>

                                    <div>
                                        <div className="text-white-transparent-8 mb-4">
                                            <div className="mb-1 text-white-transparent-6 text-truncate">
                                                <i className={data.diff_pen >= 0 ? "fa fa-caret-up" : "fa fa-caret-down"}/>
                                                <b> {Math.abs(data.diff_pen)} % </b>
                                                {data.diff_pen >= 0 ? "increase " : "decrease "}
                                                <div>compare to last week</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div
                                className="card mb-3 overflow-hidden fs-13px border-0 bg-gradient-custom-indigo min-height-202">


                                <div className="card-body position-relative">
                                    <h5 className="text-white-transparent-8 mb-3 fs-16px">This Week App Users</h5>
                                    <h3 className="text-white mt-n1 mb-1">{data.this_week_user}</h3>
                                    <div className="progress bg-black-transparent-5 mb-2 height-6">
                                        <div className="progrss-bar progress-bar-striped bg-white width-0"/>
                                    </div>
                                    <div>
                                        <div className="text-white-transparent-8 mb-4">
                                            <i className={data.diff_user >= 0 ? "fa fa-caret-up" : "fa fa-caret-down"}/>
                                            <b> {Math.abs(data.diff_user)} % </b>
                                            {data.diff_user >= 0 ? "increase " : "decrease "}
                                            <div>compare to last week</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-grow-1">
                                    <h5 className="mb-1">Bestseller</h5>
                                    <div className="fs-13px">Top product sales this week</div>
                                </div>

                            </div>
                            <div className="table-responsive mb-n2">
                                <CustomTable
                                    type={{
                                        "product name": 'product_name',
                                        "quantity": 'quantity',
                                        "description": 'description',
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "status": {
                                            "Chess": "text-green bg-green-transparent-2",
                                            "soccer": "text-orange bg-orange-transparent-2",
                                        },
                                    }}
                                    image={[]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={false}
                                    data={data.top_selling}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-grow-1">
                                    <h5 className="mb-1">Orders</h5>
                                    <div className="fs-13px">Latest order history</div>
                                </div>

                            </div>

                            <div className="table-responsive mb-n2">
                                <CustomTable
                                    type={{
                                        "cart id": 'cart_id',
                                        "user details": 'name',
                                        "status": 'category',
                                        "amount": 'price',
                                    }}
                                    typeEx={{}}
                                    style={{
                                        "status": {
                                            "Chess": "text-green bg-green-transparent-2",
                                            "soccer": "text-orange bg-orange-transparent-2",
                                        },
                                    }}
                                    image={[]}
                                    button={{}}
                                    buttonEx={{}}
                                    searchField={false}
                                    data={data.on_going}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}