

import axios from "axios";

export const RequestMethod = {
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const BASEURL = "https://waakye-plug-backend.onrender.com";
// export const BASEURL = "http://192.168.8.197:3294/";



export function makeApiRequest(path, method, data={}, headers, authRequired, token) {  
    headers['Content-Type'] = 'application/json'
    headers['Accept'] = 'application/json'

    if(authRequired){
        headers['Authorization'] = `Bearer ${token}`
    }

    const api = axios.create({
        baseURL:    BASEURL,
        headers: headers
    })

   
    switch (method){
        case RequestMethod.GET:
            return api
            .get(path,)
        case RequestMethod.POST:
            return api.post(path, data)
        case RequestMethod.PATCH:
            return {
                url: `${BASEURL}/${path}`,
                method: RequestMethod.POST,
                headers: headers,
                data: data,
            }
        case RequestMethod.PUT:
            return api.put(path, data)
        case RequestMethod.DELETE:
            return api.delete(path)
    }
}
export function makeFormDataRequest(path, method, data={}, headers, authRequired, token) {

    headers['Content-Type'] = 'multipart/form-data'

    if(authRequired){
        headers['Authorization'] = `Bearer ${token}`
    }

    const api = axios.create({
        baseURL:    BASEURL,
        headers: headers
    })


    switch (method){
        case RequestMethod.GET:
            return api
            .get(path,)
        case RequestMethod.POST:
            return api.post(path, data)
        case RequestMethod.PATCH:
            return {
                url: `${BASEURL}/${path}`,
                method: RequestMethod.POST,
                headers: headers,
                data: data,
            }
        case RequestMethod.PUT:
            return {
                url: `${BASEURL}/${path}`,
                method: RequestMethod.POST,
                headers: headers,
                data: data,
            }
    }
}
