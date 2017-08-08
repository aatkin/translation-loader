// flattens a nested translation file into more usable format
// author Anssi Kinnunen
module.exports = function(source) {
    // parse source string into manipulable JSON object
    const json = JSON.parse(source);
    const flattened = {};
    const enumerate = (obj, path = "") =>
    {
        for (let prop in obj)
        {
            let val = obj[prop];
            if (typeof val !== "object")
            {
                flattened[path + prop] = val;
            }
            else
            {
                const vals = enumerate(val, path + prop + ".");
                Object.assign(flattened, vals);
            }
        }
    }
    enumerate(json);

    // json-loader eats json objects as well
    const jsonLoader = require("json-loader");
    return jsonLoader.call(this, flattened);
};