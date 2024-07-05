import https from '../axios';
const apiUrl = 'http://localhost:3333';

export const createProduct = (payload) => {
    return https.post(`${apiUrl}/product`, payload).then((res) => {
        return res.data;
    });
};
export const createCart = (payload) => {
    return https.patch(`${apiUrl}/cart/update-item`, payload).then((res) => {
        return res.data;
    });
};

export const updateItemCart = (payload) => {
    return https.put(`${apiUrl}/cart`, payload).then((res) => res.data);
};

export const getItemCart = () => {
    return https.get(`${apiUrl}/cart/me`).then((res) => res.data);
};

export const createCategory = (payload) => {
    return https.post(`${apiUrl}/category`, payload).then((res) => {
        return res.data;
    });
};

export const getProduct = (pageSize = 4, page = 1) => {
    return https.get(`${apiUrl}/product?pageSize=${pageSize}&page=${page}`).then((res) => res.data);
};

export const getCategory = () => {
    return https.get(`${apiUrl}/category`).then((res) => res.data);
};

export const getSearchResult = (search) => {
    return https.get(`${apiUrl}/product?search=${encodeURIComponent(search)}`).then((res) => res.data);
};

export const getDetails = (id) => {
    return https.get(`${apiUrl}/product/${id}`).then((res) => res.data);
};

export const getProfileUser = () => {
    return https.get(`${apiUrl}/users/me`).then((res) => res.data);
};
export const updateProfile = (payload) => {
    return https.put(`${apiUrl}/users/me`, payload).then((res) => res.data);
};
export const register = (payload) => {
    return https.post(`${apiUrl}/auth/register`, payload).then((res) => res.data);
};

export const login = async (payload) => {
    const response = await https.post(`${apiUrl}/auth/login`, payload);
    console.log(response);
    const token = response.data.accessToken;
    if (token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    if (!user) {
        return {};
    }
    return JSON.parse(user);
};
