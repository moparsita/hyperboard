import {makeRequest} from "../RequestsUtils";

class AuthRoute {
    static route = 'auth';

    init = async (mobile) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'init',
            type: "POST",
            auth: false,
            body: {
                mobile: mobile
            }
        });
    };

    forgot = async (mobile) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'forgot',
            type: "POST",
            auth: false,
            body: {
                mobile: mobile,
            }
        });
    };


    validate = async (mobile, code) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'validate',
            type: "POST",
            auth: false,
            body: {
                mobile: mobile,
                code: code,
            }
        });
    };


    login = async (mobile, password) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'login',
            type: "POST",
            auth: false,
            body: {
                mobile: mobile,
                password: password,
            }
        });
    };

    register = async (name, lastName, password, code, mobile) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'register',
            type: "POST",
            auth: false,
            body: {
                name: name,
                lastName: lastName,
                mobile: mobile,
                password: password,
                code: code,
            }
        });
    };

    check = async () => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'check',
            type: "GET",
            auth: true,
        });
    };



}
export default AuthRoute;