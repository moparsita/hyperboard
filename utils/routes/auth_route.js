import {makeRequest} from "../RequestsUtils";

class AuthRoute {
    static route = 'auth';

    init = async ({mobile,}) => {
        return await makeRequest({
            route: AuthRoute.route,
            endpoint: 'init',
            type: "POST",
            body: {
                mobile: mobile,
            },

        });
    };

    
}
export default AuthRoute;