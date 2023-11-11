import { API_DOMAIN } from "../utility/constants";


export const authAPI = {
    LOGIN                 : `${API_DOMAIN}/auth/login`,
    REFRESH_TOKEN         : `${API_DOMAIN}/auth/refresh`,
};

export const memberAPI = {
    REGISTER              : `${API_DOMAIN}/auth/register`,
}