const cluster = require("node:cluster")
    , { threadId: e } = require("node:worker_threads");
var parts = { timestamp: 53, place_id: 4, sequence: 10 }
    , classes = {};
const calculateLimits = e => { let t = {}; for (let s in e) t[s] = Math.pow(2, e[s]) - 1; return t }
    , calculateShifts = e => {
        let t = {}
            , s = 0
            , i = Object.keys(e)
            .reverse();
        for (let a of i) t[a] = s, s += e[a];
        return t
    };
var limits = calculateLimits(parts)
    , shifts = calculateShifts(parts);
module.exports = class {
    constructor(e = {}) {
        if ((e = {
                epoch: new Date("2025-01-01T00:00:00.000Z")
                    .getTime()
                , place_id: 0
                , ...e
            })
            .place_id < 0 || e.place_id > limits.place_id) throw Error("Field place_id must be between 0 and " + limits.place_id);
        if (classes[new Date(e.epoch)
                .getTime() + "-" + e.place_id]) return classes[new Date(e.epoch)
            .getTime() + "-" + e.place_id];
        classes[new Date(e.epoch)
                .getTime() + "-" + e.place_id] = this, this._epoch = new Date(e.epoch)
            .getTime(), this._place_id = e.place_id & limits.place_id, this._sequence = 0, this._last_timestamp = -1
    }
    _currentTimestamp() { return Date.now() - this._epoch } _waitForNextTime(e) { let t = this._currentTimestamp(); for (; e >= t;) t = this._currentTimestamp(); return t } generate() {
        let e = this._currentTimestamp();
        if (e < this._last_timestamp) throw Error("Clock moved backwards");
        return e === this._last_timestamp ? (this._sequence = this._sequence + 1 & limits.sequence, 0 === this._sequence && (e = this._waitForNextTime(this._last_timestamp))) : this._sequence = 0, this._last_timestamp = e, (BigInt(e) << BigInt(shifts.timestamp) | BigInt(this._place_id) << BigInt(shifts.place_id) | BigInt(this._sequence))
            .toString()
    }
    resolve(e) {
        return {
            created_at: new Date(this._epoch + parseInt(BigInt(e) >> BigInt(shifts.timestamp) & BigInt(limits.timestamp)))
                .toISOString()
            , place_id: parseInt(BigInt(e) >> BigInt(shifts.place_id) & BigInt(limits.place_id))
            , sequence: parseInt(BigInt(e) & BigInt(limits.sequence))
        }
    }
};