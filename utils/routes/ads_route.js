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

    getAds = async (page, query = '', cities= '', filters = '', date = '', price = '', sortType ='جدید ترین',) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'search',
            type: "POST",
            auth: true,
            body: {
                page: page,
                query: query,
                cities: cities,
                filters: filters,
                date: date,
                price: price,
                sortType: sortType,
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

    addType = async ({id, thirdCategoryId ,}) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'add-type/'+id,
            type: "POST",
            auth: true,
            body: {
                thirdCategoryId: thirdCategoryId,
            }
        });
    }

    addTechnical = async ({id, height, width, materialId, bannerTypeId, lightingTypeId, hasRotation, hasLighting,}) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'add-technical/'+id,
            type: "POST",
            auth: true,
            body: {
                height: height,
                width: width,
                materialId: materialId,
                bannerTypeId: bannerTypeId,
                lightingTypeId: lightingTypeId,
                hasRotation: hasRotation,
                hasLighting: hasLighting,
            }
        });
    }

    addViewOptions = async ({id, viewDuration, viewerSpeed, viewConditionId, viewerTypeId, viewerAgeId, gender,}) => {
        return await makeRequest({
            route: AdsRoute.route,
            endpoint: 'dd-view-options/'+id,
            type: "POST",
            auth: true,
            body: {
                viewDuration: viewDuration,
                viewerSpeed: viewerSpeed,
                viewConditionId: viewConditionId,
                viewerTypeId: viewerTypeId,
                viewerAgeId: viewerAgeId,
                gender: gender,
            }
        });
    }
}

export default AdsRoute;