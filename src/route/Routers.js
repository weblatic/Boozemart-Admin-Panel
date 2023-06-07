import {Routes, Route} from "react-router-dom";
import {routers} from "../configuration/configurationUI"
import React from "react";

import Login from "../views/00__log/Login";
import Forgot from "../views/00__log/Forgot";
import ChangePassword from "../views/00_user_profile/ChangePassword";
import EditProfile from "../views/00_user_profile/EditProfile";
import Home from "../views/01_dashboard/Home";
import RolesAdd from "../views/02_sub_admin_management/RolesAdd";
import RolesEdit from "../views/02_sub_admin_management/RolesEdit";
import Roles from "../views/02_sub_admin_management/Roles";
import SubAdmin from "../views/02_sub_admin_management/SubAdmin";
import SubAdminAdd from "../views/02_sub_admin_management/SubAdminAdd";
import SubAdminEdit from "../views/02_sub_admin_management/SubAdminEdit";
import Tax from "../views/03_taxes/Tax";
import TaxAdd from "../views/03_taxes/TaxAdd";
import TaxEdit from "../views/03_taxes/TaxEdit";
import Id from "../views/04_id/Id";
import IdEdit from "../views/04_id/IdEdit";
import IdAdd from "../views/04_id/IdAdd";
import MembershipPlans from "../views/05_membership_management/MembershipPlans";
import MembershipPlansAdd from "../views/05_membership_management/MembershipAdd";
import MembershipPlansEdit from "../views/05_membership_management/MembershipEdit";
import ItemRequirement from "../views/06_reports/ItemRequirement";
import ItemRequirementTodayStore from "../views/06_reports/ItemRequirementTodayStore";
import ItemSalesReport from "../views/06_reports/ItemSalesReport";
import Reports from "../views/06_reports/Reports";
import TaxReports from "../views/06_reports/TaxReports";
import DriverNotifications from "../views/08_list_notifications/DriverNotifications";
import StoreNotifications from "../views/08_list_notifications/StoreNotifications";
import UserNotifications from "../views/08_list_notifications/UserNotifications";
import SendNotificationToDriver from "../views/07_send_notifications/SendNotificationToDriver";
import SendNotificationToUsers from "../views/07_send_notifications/SendNotificationToUsers";
import SendNotificationToStore from "../views/07_send_notifications/SendNotificationToStore";
import UsersData from "../views/09_users_management/UsersData";
import UsersDataEdit from "../views/09_users_management/UsersDataEdit";
import UsersDataDetail from "../views/09_users_management/UsersDataDetail";
import WalletRechargeHistory from "../views/09_users_management/WalletRechargeHistory";
import ParentCategories from "../views/10_category_management/ParentCategories";
import ParentCategoryAdd from "../views/10_category_management/ParentCategoryAdd";
import ParentCategoryEdit from "../views/10_category_management/ParentCategoryEdit";
import SubCategories from "../views/10_category_management/SubCategories";
import SubCategoryAdd from "../views/10_category_management/SubCategoryAdd";
import SubCategoryEdit from "../views/10_category_management/SubCategoryEdit";
import AdminProducts from "../views/11_product_catalog/AdminProducts";
import AdminProductAdd from "../views/11_product_catalog/AdminProductAdd";
import AdminProductEdit from "../views/11_product_catalog/AdminProductEdit";
import AdminProductVariant from "../views/11_product_catalog/AdminProductVariant";
import AdminProductVariantEdit from "../views/11_product_catalog/AdminProductVariantEdit";
import AdminProductVariantAdd from "../views/11_product_catalog/AdminProductVariantAdd";
import BulkUploadProduct from "../views/11_product_catalog/BulkUpload";
import TendingSearch from "../views/11_product_catalog/TrendingSearch";
import StoreProducts from "../views/11_product_catalog/StoreProducts";
import AreaSociety from "../views/12_area_management/AreaSociety";
import AreaSocietyAdd from "../views/12_area_management/AreaSocietyAdd";
import AreaSocietyEdit from "../views/12_area_management/AreaSocietyEdit";
import BulkUploadArea from "../views/12_area_management/BulkUpload";
import Cities from "../views/12_area_management/Cities";
import CityAdd from "../views/12_area_management/CityAdd";
import CityEdit from "../views/12_area_management/CityEdit";
import StoreApproval from "../views/13_store_management/StoreApproval";
import StoreEarningPayments from "../views/13_store_management/StoreEarningPayments";
import Store from "../views/13_store_management/Store";
import StoreAdd from "../views/13_store_management/StoreAdd";
import StoreEdit from "../views/13_store_management/StoreEdit";
import StoreOrders from "../views/13_store_management/StoreOrders";
import AllOrders from "../views/14_orders_management/AllOrders";
import CancelledOrders from "../views/14_orders_management/CancelledOrders";
import CompletedOrders from "../views/14_orders_management/CompletedOrders";
import DayWiseOrders from "../views/14_orders_management/DayWiseOrders";
import MissedOrders from "../views/14_orders_management/MissedOrders";
import OngoingOrders from "../views/14_orders_management/OngoingOrders";
import OutForDeliveryOrders from "../views/14_orders_management/OutForDeliveryOrders";
import PaymentFailedOrders from "../views/14_orders_management/PaymentFailedOrders";
import PendingOrders from "../views/14_orders_management/PendingOrders";
import RejectedByStore from "../views/14_orders_management/RejectedByStore";
import PayoutRequests from "../views/15_payout/PayoutRequests";
import PayoutValidation from "../views/15_payout/PayoutValidation";
import RedeemValue from "../views/16_rewards/RedeemValue";
import Rewards from "../views/16_rewards/Rewards";
import RewardAdd from "../views/16_rewards/RewardAdd";
import RewardEdit from "../views/16_rewards/RewardEdit";
import DeliveryBoy from "../views/17_delivery_boy/DeliveryBoy";
import DeliveryBoyAdd from "../views/17_delivery_boy/DeliveryBoyAdd";
import DeliveryBoyEdit from "../views/17_delivery_boy/DeliveryBoyEdit";
import DeliveryBoyOrder from "../views/17_delivery_boy/DeliveryBoyOrder";
import DeliveryBoyIncentive from "../views/17_delivery_boy/DeliveryBoyIncentive";
import AboutUs from "../views/18_pages/AboutUs";
import TermsConditions from "../views/18_pages/TermsConditions";
import DeliveryBoyFeedback from "../views/19_feedback/DeliveryBoyFeedback";
import StoreFeedback from "../views/19_feedback/StoreFeedback";
import UsersFeedback from "../views/19_feedback/UsersFeedback";
import DeliveryBoyCallbackRequests from "../views/20_callback_requests/DeliveryBoyCallbackRequests";
import StoresCallbackRequests from "../views/20_callback_requests/StoresCallbackRequests";
import UsersCallbackRequests from "../views/20_callback_requests/UsersCallbackRequests";
import Setting from "../views/21_settings/0_Setting";
import CancellingReasons from "../views/22_cancelling_reasons/CancellingReasons";
import CancellingReasonAdd from "../views/22_cancelling_reasons/CancellingReasonAdd";
import CancellingReasonEdit from "../views/22_cancelling_reasons/CancellingReasonEdit";
import AuthRouter from "../utils/AuthRouter";

export const Routers = (props) => (
    <Routes>
        <Route path={routers.changePassword}
               element={<AuthRouter><ChangePassword language={props.language}/></AuthRouter>}/>
        <Route path={routers.profile} element={<AuthRouter><EditProfile language={props.language}/> </AuthRouter>}/>
        <Route path="/" element={<AuthRouter><Home language={props.language}/> </AuthRouter>}/>
        <Route path={routers.home} element={<AuthRouter><Home language={props.language}/> </AuthRouter>}/>
        <Route path={routers.roles} element={<AuthRouter><Roles language={props.language}/> </AuthRouter>}/>
        <Route path={routers.rolesAdd} element={<AuthRouter><RolesAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.rolesEdit} element={<AuthRouter><RolesEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subAdminList} element={<AuthRouter><SubAdmin language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subAdminEdit}
               element={<AuthRouter><SubAdminEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subAdminAdd} element={<AuthRouter><SubAdminAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.taxList} element={<AuthRouter><Tax language={props.language}/> </AuthRouter>}/>
        <Route path={routers.taxAdd} element={<AuthRouter><TaxAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.taxEdit} element={<AuthRouter><TaxEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.idList} element={<AuthRouter><Id language={props.language}/> </AuthRouter>}/>
        <Route path={routers.idAdd} element={<AuthRouter><IdAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.idEdit} element={<AuthRouter><IdEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.membershipList}
               element={<AuthRouter><MembershipPlans language={props.language}/> </AuthRouter>}/>
        <Route path={routers.membershipAdd}
               element={<AuthRouter><MembershipPlansAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.membershipEdit}
               element={<AuthRouter><MembershipPlansEdit language={props.language}/> </AuthRouter>}/>
        <Route path="/report">
            <Route path={routers.reportItemSaleByStore}
                   element={<AuthRouter><ItemRequirement language={props.language}/> </AuthRouter>}/>
            <Route path={routers.reportItemSaleByTodayStore}
                   element={<AuthRouter><ItemRequirementTodayStore language={props.language}/> </AuthRouter>}/>
            <Route path={routers.reportTotalItemSalesLast30Days}
                   element={<AuthRouter><ItemSalesReport language={props.language}/> </AuthRouter>}/>
            <Route path={routers.reportOrder} element={<AuthRouter><Reports language={props.language}/> </AuthRouter>}/>
            <Route path={routers.reportTax}
                   element={<AuthRouter><TaxReports language={props.language}/> </AuthRouter>}/>
        </Route>
        <Route path="/notification">
            <Route path={routers.notificationToDriver}
                   element={<AuthRouter><SendNotificationToDriver language={props.language}/> </AuthRouter>}/>
            <Route path={routers.notificationToStore}
                   element={<AuthRouter><SendNotificationToStore language={props.language}/> </AuthRouter>}/>
            <Route path={routers.notificationToUser}
                   element={<AuthRouter><SendNotificationToUsers language={props.language}/> </AuthRouter>}/>
            <Route path={routers.notificationListDriver}
                   element={<AuthRouter><DriverNotifications language={props.language}/> </AuthRouter>}/>
            <Route path={routers.notificationListStore}
                   element={<AuthRouter><StoreNotifications language={props.language}/> </AuthRouter>}/>
            <Route path={routers.notificationListUser}
                   element={<AuthRouter><UserNotifications language={props.language}/> </AuthRouter>}/>
        </Route>
        <Route path={routers.userList} element={<AuthRouter><UsersData language={props.language}/> </AuthRouter>}/>
        <Route path={routers.userEdit} element={<AuthRouter><UsersDataEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.userDetail}
               element={<AuthRouter><UsersDataDetail language={props.language}/> </AuthRouter>}/>
        <Route path={routers.usersWalletRechargeHistory}
               element={<AuthRouter><WalletRechargeHistory language={props.language}/> </AuthRouter>}/>
        <Route path={routers.categoryList}
               element={<AuthRouter><ParentCategories language={props.language}/> </AuthRouter>}/>
        <Route path={routers.categoryAdd}
               element={<AuthRouter><ParentCategoryAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.categoryEdit}
               element={<AuthRouter><ParentCategoryEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subCategoryList}
               element={<AuthRouter><SubCategories language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subCategoryAdd}
               element={<AuthRouter><SubCategoryAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.subCategoryEdit}
               element={<AuthRouter><SubCategoryEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productList}
               element={<AuthRouter><AdminProducts language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productAdd}
               element={<AuthRouter><AdminProductAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productEdit}
               element={<AuthRouter><AdminProductEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productVariant}
               element={<AuthRouter><AdminProductVariant language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productVariantAdd}
               element={<AuthRouter><AdminProductVariantAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.productVariantEdit}
               element={<AuthRouter><AdminProductVariantEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.bulkUpload}
               element={<AuthRouter><BulkUploadProduct language={props.language}/> </AuthRouter>}/>
        <Route path={routers.trendingSearchProductAdd}
               element={<AuthRouter><TendingSearch language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storeProductsList}
               element={<AuthRouter><StoreProducts language={props.language}/> </AuthRouter>}/>
        <Route path={routers.societyList} element={<AuthRouter><AreaSociety language={props.language}/> </AuthRouter>}/>
        <Route path={routers.societyAdd}
               element={<AuthRouter><AreaSocietyAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.societyEdit}
               element={<AuthRouter><AreaSocietyEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.areaBulkUploadCitySociety}
               element={<AuthRouter><BulkUploadArea language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cityList} element={<AuthRouter><Cities language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cityAdd} element={<AuthRouter><CityAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cityEdit} element={<AuthRouter><CityEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storesWaitingForApprovalStoreList}
               element={<AuthRouter><StoreApproval language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storesFinance}
               element={<AuthRouter><StoreEarningPayments language={props.language}/> </AuthRouter>}/>
        <Route path="/admin">
            <Route path={routers.adminStoreList}
                   element={<AuthRouter><Store language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminStoreAdd}
                   element={<AuthRouter><StoreAdd language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminStoreEdit}
                   element={<AuthRouter><StoreEdit language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminStoreOrders}
                   element={<AuthRouter><StoreOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminAllOrders}
                   element={<AuthRouter><AllOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminCancelledOrders}
                   element={<AuthRouter><CancelledOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminCompleteOrders}
                   element={<AuthRouter><CompletedOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminOngoingOrders}
                   element={<AuthRouter><OngoingOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminOutForDeliveryOrders}
                   element={<AuthRouter><OutForDeliveryOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminPaymentFailedOrders}
                   element={<AuthRouter><PaymentFailedOrders language={props.language}/> </AuthRouter>}/>
            <Route path={routers.adminPendingOrders}
                   element={<AuthRouter><PendingOrders language={props.language}/> </AuthRouter>}/>
        </Route>
        <Route path={routers.ordersTodayAll}
               element={<AuthRouter><DayWiseOrders language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storeMissedOrders}
               element={<AuthRouter><MissedOrders language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cancelledOrders}
               element={<AuthRouter><RejectedByStore language={props.language}/> </AuthRouter>}/>
        <Route path={routers.payoutReq}
               element={<AuthRouter><PayoutRequests language={props.language}/> </AuthRouter>}/>
        <Route path={routers.prv} element={<AuthRouter><PayoutValidation language={props.language}/> </AuthRouter>}/>
        <Route path={routers.redeem} element={<AuthRouter><RedeemValue language={props.language}/> </AuthRouter>}/>
        <Route path={routers.reward} element={<AuthRouter><Rewards language={props.language}/> </AuthRouter>}/>
        <Route path={routers.rewardAdd} element={<AuthRouter><RewardAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.rewardEdit} element={<AuthRouter><RewardEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.dBoyList} element={<AuthRouter><DeliveryBoy language={props.language}/> </AuthRouter>}/>
        <Route path={routers.dBoyAdd} element={<AuthRouter><DeliveryBoyAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.dBoyEdit}
               element={<AuthRouter><DeliveryBoyEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.dBoyOrder}
               element={<AuthRouter><DeliveryBoyOrder language={props.language}/> </AuthRouter>}/>
        <Route path={routers.dBoyIncentive}
               element={<AuthRouter><DeliveryBoyIncentive language={props.language}/> </AuthRouter>}/>
        <Route path={routers.aboutUs} element={<AuthRouter><AboutUs language={props.language}/> </AuthRouter>}/>
        <Route path={routers.terms} element={<AuthRouter><TermsConditions language={props.language}/> </AuthRouter>}/>
        <Route path={routers.driverFeedbackList}
               element={<AuthRouter><DeliveryBoyFeedback language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storeFeedbackList}
               element={<AuthRouter><StoreFeedback language={props.language}/> </AuthRouter>}/>
        <Route path={routers.userFeedbackList}
               element={<AuthRouter><UsersFeedback language={props.language}/> </AuthRouter>}/>
        <Route path={routers.driverCallbackRequests}
               element={<AuthRouter><DeliveryBoyCallbackRequests language={props.language}/> </AuthRouter>}/>
        <Route path={routers.storeCallbackRequests}
               element={<AuthRouter><StoresCallbackRequests language={props.language}/> </AuthRouter>}/>
        <Route path={routers.userCallbackRequests}
               element={<AuthRouter><UsersCallbackRequests language={props.language}/> </AuthRouter>}/>
        <Route path={routers.globalSetting} element={<AuthRouter><Setting language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cancellingReasonsList}
               element={<AuthRouter><CancellingReasons language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cancellingReasonsAdd}
               element={<AuthRouter><CancellingReasonAdd language={props.language}/> </AuthRouter>}/>
        <Route path={routers.cancellingReasonsEdit}
               element={<AuthRouter><CancellingReasonEdit language={props.language}/> </AuthRouter>}/>
        <Route path={routers.login} element={<Login/>}/>
        <Route path={routers.forgot} element={<Forgot/>}/>
    </Routes>
);

export const RoutersLog = () => (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path={routers.login} element={<Login/>}/>
        <Route path={routers.forgot} element={<Forgot/>}/>
    </Routes>
);
