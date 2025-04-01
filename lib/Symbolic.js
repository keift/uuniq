const Anybase = require("any-base")
    , Snowflake = require("./Snowflake.js");
let classes = {};
module.exports = class {
    constructor(e = {}) {
        if (e = {
                epoch: new Date("2025-01-01T00:00:00.000Z")
                    .getTime()
                , place_id: 0
                , charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                , ...e
            }, classes[new Date(e.epoch)
                .getTime() + "-" + e.place_id + "-" + e.charset]) return classes[new Date(e.epoch)
            .getTime() + "-" + e.place_id + "-" + e.charset];
        classes[new Date(e.epoch)
            .getTime() + "-" + e.place_id + "-" + e.charset] = this, this._Snowflake = new Snowflake({ epoch: e.epoch, place_id: e.place_id }), this._encode = Anybase(Anybase.DEC, e.charset), this._decode = Anybase(e.charset, Anybase.DEC)
    }
    generate() { return this._encode(this._Snowflake.generate()) } resolve(e) { return this._Snowflake.resolve(this._decode(e)) }
};