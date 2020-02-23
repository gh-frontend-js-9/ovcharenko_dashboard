import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'

class API {
    static async getProject() {
        let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            }
        })
        const formatedResponce = await response.json();
        return formatedResponce;
    }
    static postProject(body) {
        return   axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', body)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    static signUp(signUpBody) {
        return axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/users', signUpBody)
            .then(response => {
                console.log('registr res', response);
            })
            .catch(error => {
                console.log('registr err', error);
            })

    }
    static logIn(logInBody) {
      return   axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', logInBody)
            .then(response => {
                console.log('registr res', response);
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
    static reset(resetBody) {
        return  axios.post('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password',resetBody)
            .then(response => {
                console.log('registr res', response);
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
}

export default API
