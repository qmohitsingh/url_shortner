
const axios = require('axios');

describe('Testing all 3 apis working', function(){
    it("getShortenedURL", async function() {

        let url = "http://localhost:5000/url/getShortenedURL/clientId/https://github.com/ellenkorbes/url-shortener-js/blob/master/server.js";
        let result = await axios.get(url);
        console.log(result.data);
        console.assert(result.data.status_code === 200);
    });

    it("getOriginalURL: passing invalid short url", async function(){
        let url = "http://localhost:5000/url/getOriginalURL/http://shortner.com/3tiiQnw7T";
        let result = await axios.get(url);
        console.log(result.data);
        console.assert(result.data.status_code === 400);
    });

    it("getStatisticsUsage", async function(){

        let url = "http://localhost:5000/url/getStatisticsUsage";
        let result = await axios.get(url);
        console.log(result.data);
        console.assert(result.data.status_code === 200);
    });

});