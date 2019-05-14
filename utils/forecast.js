const request = require("request");

const weatherApiKey = '985df9f0b6c055af7a814d410c079d0f';

module.exports = forecast = (lat, lng, callback) => {
    const weatherApiEndpoint = `https://api.darksky.net/forecast/${weatherApiKey}/${lat},${lng}?units=si`;
    request({ url: weatherApiEndpoint, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to DarkSky.');
            return;
        } else if (response.body.error) {
            callback('Unable to find location.');
            return;
        }
        const { body } = response;
        callback(undefined, {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            precipProbability: body.currently.precipProbability
        });
    });
};
