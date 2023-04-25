import {makeRequest} from "../RequestsUtils";

class DashboardRoute {
    static route = 'dashboard';
    notifications = async () => {
        return await makeRequest({
            route: DashboardRoute.route,
            endpoint: 'notifications',
            type: "GET",
            auth: true,

        });
    };

    ads = async (type) => {
        return await makeRequest({
            route: DashboardRoute.route,
            endpoint: 'ads/' + type,
            type: "GET",
            auth: true,

        });
    };




}

export default DashboardRoute;