const base62 = require("base62/lib/custom")
    , Snowflake = require("./Snowflake.js");
var classes = {};
module.exports = class {
    constructor(e = {}) {
        if (e = {
                epoch: new Date("2025-01-01T00:00:00.000Z")
                    .getTime()
                , place_id: 0
                , charset: "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                , ...e
            }, classes[new Date(e.epoch)
                .getTime() + "-" + e.place_id + "-" + e.charset]) return classes[new Date(e.epoch)
            .getTime() + "-" + e.place_id + "-" + e.charset];
        classes[new Date(e.epoch)
            .getTime() + "-" + e.place_id + "-" + e.charset] = this, this._Snowflake = new Snowflake(e), this._charset = base62.indexCharset(e.charset)
    }
    generate() { return base62.encode(this._Snowflake.generate(), this._charset) } resolve(e) { return this._Snowflake.resolve(base62.decode(e, this._charset)) }
};