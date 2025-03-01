const base62 = require("base62/lib/custom")
    , Snowflake = require("./Snowflake.js");
module.exports = class {
    constructor(e = {}) {
        e = {
            epoch: new Date("2025-01-01T00:00:00.000Z")
                .getTime()
            , place_id: 0
            , charset: "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-"
            , ...e
        }, this._Snowflake = new Snowflake(e), this._charset = base62.indexCharset(e.charset)
    }
    generate() { return base62.encode(this._Snowflake.generate(), this._charset) } resolve(e) { return this._Snowflake.resolve(base62.decode(e, this._charset)) }
};