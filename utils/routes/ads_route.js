import {makeRequest} from "../RequestsUtils";

class AdsRoute {
    static route = 'ads';
    filters = async () => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'filters',
            type: "GET",

        });
    };

    getAds = async (page) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'search',
            type: "POST",
            auth: true,
            body: {
                page: page,
            },
        });
    };
    single = async (id) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: id,
            type: "GET",
            auth: true,
        });
    };

    initAdd = async ({id = 0, stateId, cityId, directions = [], latitude = 0, longitude = 0,}) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'init-add',
            type: "POST",
            auth: true,
            body: {
                id: id,
                stateId: stateId,
                cityId: cityId,
                directions: directions,
                latitude: latitude,
                longitude: longitude,
            }
        });
    }

    addAbout = async ({id, title, description, categoryId, secondCategoryId ,}) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'add-about/'+id,
            type: "POST",
            auth: true,
            body: {
                title: title,
                description: description,
                firstCategoryId: categoryId,
                secondCategoryId: secondCategoryId,
            }
        });
    }
}

export default AdsRoute;