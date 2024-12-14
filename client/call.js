import axios from "axios"

async function callApi() {
    try {
        let userData = await axios.get(`http://172.24.125.61:5002`)
        console.log(userData.data);
    } catch (error) {
        console.log(error);
    }
}
callApi()
