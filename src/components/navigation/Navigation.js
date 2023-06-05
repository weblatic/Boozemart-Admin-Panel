import React from "react";
import {routers, tabs} from "../../configuration/configurationUI";
import NavItem from "./NavItem";
import "../../configuration/configurationUI";

export default function Navigation(props) {

    const [opened, setOpened] = React.useState([]);

    React.useEffect(() => {
        let open = [];
        for (let i = 0; i <= 21; i++) {
            open[i] = false;
        }
        setOpened(open);
    }, []);


    const setIndex = (index, stateOpen) => {
        let open = [];
        for (let i = 0; i <= 21; i++) {
            open[i] = false;
        }
        open[index] = stateOpen;
        setOpened(open);
    };


    return (
        <div className="app-sidebar-content nav-scroll">
            <div className="menu">
                <div className="menu-header">
                    {tabs.navigation[props.language]}
                </div>
                <NavItem
                    title={tabs.dashboard[props.language]}
                    mainTab={routers.home}
                    icon={"fa fa-laptop"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(0, stateOpen)}
                    open={opened[0]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.subAdminManagement[props.language]}
                    mainTab={""}
                    icon={"fas fa-user-astronaut"}
                    tabs={{
                        [tabs.roles[props.language]]: routers.roles,
                        [tabs.subAdminList[props.language]]: routers.subAdminList
                    }}
                    setOpenIndex={(stateOpen) => setIndex(1, stateOpen)}
                    open={opened[1]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.taxList[props.language]}
                    mainTab={routers.taxList}
                    icon={"fa fa-hashtag"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(2, stateOpen)}
                    open={opened[2]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.idList[props.language]}
                    mainTab={routers.idList}
                    icon={"fa fa-credit-card"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(3, stateOpen)}
                    open={opened[3]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.membershipList[props.language]}
                    mainTab={routers.membershipList}
                    icon={"fa fa-tag"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(4, stateOpen)}
                    open={opened[4]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.reports[props.language]}
                    mainTab={""}
                    icon={"fa fa-cubes"}
                    tabs={{
                        [tabs.reportItemSaleByStore[props.language]]: routers.reportItemSaleByStore,
                        [tabs.reportTotalItemSalesLast30Days[props.language]]: routers.reportTotalItemSalesLast30Days,
                        [tabs.reportTax[props.language]]: routers.reportTax,
                        [tabs.reportOrder[props.language]]: routers.reportOrder,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(5, stateOpen)}
                    open={opened[5]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.sendNotifications[props.language]}
                    mainTab={""}
                    icon={"fa fa-bell"}
                    tabs={{
                        [tabs.notificationToUser[props.language]]: routers.notificationToUser,
                        [tabs.notificationToStore[props.language]]: routers.notificationToStore,
                        [tabs.notificationToDriver[props.language]]: routers.notificationToDriver,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(6, stateOpen)}
                    open={opened[6]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.listNotifications[props.language]}
                    mainTab={""}
                    icon={"fa fa-bell"}
                    tabs={{
                        [tabs.notificationListUser[props.language]]: routers.notificationListUser,
                        [tabs.notificationListStore[props.language]]: routers.notificationListStore,
                        [tabs.notificationListDriver[props.language]]: routers.notificationListDriver,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(7, stateOpen)}
                    open={opened[7]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.userManagement[props.language]}
                    mainTab={""}
                    icon={"fa fa-users"}
                    tabs={{
                        [tabs.userList[props.language]]: routers.userList,
                        [tabs.usersWalletRechargeHistory[props.language]]: routers.usersWalletRechargeHistory,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(8, stateOpen)}
                    open={opened[8]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.categoryManagement[props.language]}
                    mainTab={""}
                    icon={"fa fa-cubes"}
                    tabs={{
                        [tabs.categoryList[props.language]]: routers.categoryList,
                        [tabs.subCategoryList[props.language]]: routers.subCategoryList,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(9, stateOpen)}
                    open={opened[9]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.productCatalog[props.language]}
                    mainTab={""}
                    icon={"fa fa-cubes"}
                    tabs={{
                        [tabs.productList[props.language]]: routers.productList,
                        [tabs.storeProductsList[props.language]]: routers.storeProductsList,
                        [tabs.trendingSearchProductAdd[props.language]]: routers.trendingSearchProductAdd,
                        [tabs.bulkUpload[props.language]]: routers.bulkUpload,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(10, stateOpen)}
                    open={opened[10]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.areaManagement[props.language]}
                    mainTab={""}
                    icon={"fa fa-map"}
                    tabs={{
                        [tabs.cityList[props.language]]: routers.cityList,
                        [tabs.societyList[props.language]]: routers.societyList,
                        [tabs.areaBulkUploadCitySociety[props.language]]: routers.areaBulkUploadCitySociety,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(11, stateOpen)}
                    open={opened[11]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.storeManagement[props.language]}
                    mainTab={""}
                    icon={"fa fa-building"}
                    tabs={{
                        [tabs.adminStoreList[props.language]]: routers.adminStoreList,
                        [tabs.storesFinance[props.language]]: routers.storesFinance,
                        [tabs.storesWaitingForApprovalStoreList[props.language]]: routers.storesWaitingForApprovalStoreList,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(12, stateOpen)}
                    open={opened[12]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.ordersManagement[props.language]}
                    mainTab={""}
                    icon={"fa fa-calendar"}
                    tabs={{
                        [tabs.cancelledOrders[props.language]]: routers.cancelledOrders,
                        [tabs.adminAllOrders[props.language]]: routers.adminAllOrders,
                        [tabs.adminPendingOrders[props.language]]: routers.adminPendingOrders,
                        [tabs.adminCancelledOrders[props.language]]: routers.adminCancelledOrders,
                        [tabs.adminOngoingOrders[props.language]]: routers.adminOngoingOrders,
                        [tabs.adminOutForDeliveryOrders[props.language]]: routers.adminOutForDeliveryOrders,
                        [tabs.adminPaymentFailedOrders[props.language]]: routers.adminPaymentFailedOrders,
                        [tabs.adminCompleteOrders[props.language]]: routers.adminCompleteOrders,
                        [tabs.ordersTodayAll[props.language]]: routers.ordersTodayAll,
                        [tabs.storeMissedOrders[props.language]]: routers.storeMissedOrders,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(13, stateOpen)}
                    open={opened[13]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.payout[props.language]}
                    mainTab={""}
                    icon={"fa fa-check"}
                    tabs={{
                        [tabs.payoutReq[props.language]]: routers.payoutReq,
                        [tabs.prv[props.language]]: routers.prv,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(14, stateOpen)}
                    open={opened[14]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.rewardManage[props.language]}
                    mainTab={""}
                    icon={"fa fa-trophy"}
                    tabs={{
                        [tabs.reward[props.language]]: routers.reward,
                        [tabs.redeem[props.language]]: routers.redeem,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(15, stateOpen)}
                    open={opened[15]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.deliveryBoy[props.language]}
                    mainTab={""}
                    icon={"fa fa-users"}
                    tabs={{
                        [tabs.dBoyList[props.language]]: routers.dBoyList,
                        [tabs.dBoyIncentive[props.language]]: routers.dBoyIncentive,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(16, stateOpen)}
                    open={opened[16]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.pages[props.language]}
                    mainTab={""}
                    icon={"fa fa-bookmark"}
                    tabs={{
                        [tabs.aboutUs[props.language]]: routers.aboutUs,
                        [tabs.terms[props.language]]: routers.terms,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(17, stateOpen)}
                    open={opened[17]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.feedback[props.language]}
                    mainTab={""}
                    icon={"fa fa-comment"}
                    tabs={{
                        [tabs.userFeedbackList[props.language]]: routers.userFeedbackList,
                        [tabs.storeFeedbackList[props.language]]: routers.storeFeedbackList,
                        [tabs.driverFeedbackList[props.language]]: routers.driverFeedbackList,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(18, stateOpen)}
                    open={opened[18]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.callbackRequests[props.language]}
                    mainTab={""}
                    icon={"fa fa-phone"}
                    tabs={{
                        [tabs.userCallbackRequests[props.language]]: routers.userCallbackRequests,
                        [tabs.storeCallbackRequests[props.language]]: routers.storeCallbackRequests,
                        [tabs.driverCallbackRequests[props.language]]: routers.driverCallbackRequests,
                    }}
                    setOpenIndex={(stateOpen) => setIndex(19, stateOpen)}
                    open={opened[19]}
                    isSimpleNav={props.isSimpleNav}
                />
                <div className="menu-header">
                    Settings
                </div>
                <NavItem
                    title={tabs.globalSetting[props.language]}
                    mainTab={routers.globalSetting}
                    icon={"fa fa-cog"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(20, stateOpen)}
                    open={opened[20]}
                    isSimpleNav={props.isSimpleNav}
                />
                <NavItem
                    title={tabs.cancellingReasonsList[props.language]}
                    mainTab={routers.cancellingReasonsList}
                    icon={"fa fa-list"}
                    tabs={{}}
                    setOpenIndex={(stateOpen) => setIndex(21, stateOpen)}
                    open={opened[21]}
                    isSimpleNav={props.isSimpleNav}
                />
            </div>
        </div>
    )
}