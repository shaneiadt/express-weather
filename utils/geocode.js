const request = require("request");

module.exports = geocode = (address, callback) => {
    const mapboxEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hhbmVpYWR0IiwiYSI6ImNqdXF0empsejA1M3k0NG42bXQ1NDhsZ28ifQ.Crv-9yuroFCTP_M6d6Wilg`

    request({ url: mapboxEndpoint, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Mapbox.');
            return;
        } else if (response.body.features.length === 0) {
            callback('No location found.');
            return;
        }
        const [lng, lat] = response.body.features[0].center;
        const location = response.body.features[0].place_name;
        callback(undefined, { lng, lat, location });
    });
};