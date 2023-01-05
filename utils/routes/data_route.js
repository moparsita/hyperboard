import {makeRequest} from "../RequestsUtils";

class DataRoute {
    static route = 'data';
    states = async () => {
        return await makeRequest({
            route: DataRoute.route,
            endpoint: 'states',
            type: "GET",
            auth: true,
        });
    };

    cities = async (id) => {
        return await makeRequest({
            route: DataRoute.route,
            endpoint: 'cities/'+id,
            auth: true,
            type: "Get",

        });
    };

    indexData = async () => {
        return await makeRequest({
            route: DataRoute.route,
            endpoint: 'index',
            type: "Get",

        });
    };

}
export default DataRoute;