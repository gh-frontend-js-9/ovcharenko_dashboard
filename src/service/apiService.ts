import axios from "axios";
import {BASE_URL} from "../config/config";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['x-access-token'] = sessionStorage.getItem('token')

class API {
    static async getProject() {
        let response = await fetch(`${BASE_URL}/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            }
        });
        const formatedResponce = await response.json();
        return formatedResponce;
    }
    static postProject(body) {
        return  axios.post(`${BASE_URL}/projects/`, body)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    static signUp(signUpBody) {
        return axios.post(`${BASE_URL}/users/`, signUpBody)
            .then(response => {
                return {
                    registerUser: response
                }
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
    static logIn(logInBody) {
      return   axios.post(`${BASE_URL}/users/login`, logInBody)
            .then(response => {
                let token = response.headers['x-auth-token'];
                axios.defaults.headers.post['x-auth-token'] = token;
                sessionStorage.setItem('token',token);

                return {
                    token: token,
                    response: response
                }
            })
            .catch(error => {
                console.log('registr err', error);
            })

    }
    static resetPassword(resetBody) {
        return  axios.post(`${BASE_URL}/users/reset_password`,resetBody)
            .then(response => {
                return {
                    anotherPassword: response
                }
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
    static createThread(user_id) {
        return axios.post(`${BASE_URL}/threads`,{
            user:{
                _id: user_id
            }
        })
            .then(response => {
                return response.data

            })
            .catch(error => {
                console.log('thread err', error);
            })
    }
    static getAllThread(token) {
        return axios.get(`${BASE_URL}/threads?sort=desc`,{
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log('err', error);
            })
    }
    static allMessageInThread(thread_id,token) {
        return axios.get(`${BASE_URL}/threads/messages/${thread_id}?sort=desc`,{
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log('err', error);
            })
    }
    static sendMessage(id,body) {
        return axios.post(`${BASE_URL}/threads/messages`,{
            headers: {
                'x-access-token': sessionStorage.getItem('token'),
            },
             thread: {
                 _id: id,
             },
             message: {
                body: body
             }
        })
            .then(response => {
                return  response.data
            })
            .catch(error => {
                console.log('err', error);
            })
    }
    static async getAllUser() {
        return await axios.get(`${BASE_URL}/users/all`, {
            headers: {
                'x-access-token': sessionStorage.getItem('token'),
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log('err', error);
            })
    }
    static getUserById(user_id) {
        return axios.get(`${BASE_URL}/users/${user_id}`, {
            headers: {
                'x-access-token': sessionStorage.getItem('token'),
            }
        })
            .then(response => {
            return response.data
        })
            .catch(error => {
                console.log('err', error);
            })
    }
}

export default API
