const cluster = require("node:cluster")
    , { threadId: e } = require("node:worker_threads");
var bits = { timestamp: 47, place_id: 5, sequence: 12 }
    , classes = {};
const calculateLimits = e => { let t = {}; for (let s in e) t[s] = Math.pow(2, e[s]) - 1; return t }
    , calculateShifts = e => {
        let t = {}
            , s = 0
            , i = Object.keys(e)
            .reverse();
        for (let c of i) t[c] = s, s += e[c];
        return t
    };
var limits = calculateLimits(bits)
    , shifts = calculateShifts(bits);
module.exports = class {
    constructor(t = {}) {
        if ((t = {
                epoch: new Date("2025-01-01T00:00:00.000Z")
                    .getTime()
                , place_id: 0
                , ...t
            })
            .place_id < 0 || t.place_id > limits.place_id) throw Error("Field place_id must be between 0 and " + limits.place_id);
        if (classes[new Date(t.epoch)
                .getTime() + "-" + t.place_id]) return classes[new Date(t.epoch)
            .getTime() + "-" + t.place_id];
        classes[new Date(t.epoch)
                .getTime() + "-" + t.place_id] = this, this._epoch = new Date(t.epoch)
            .getTime(), this._place_id = t.place_id & limits.place_id, this._process_id = (cluster.isWorker ? 0 === cluster.worker.id ? cluster.worker.id : cluster.worker.id - 1 : 0 === e ? e : e - 1) & limits.sequence, this._sequence = this._process_id, this._last_timestamp = -1
    }
    _currentTimestamp() { return Date.now() - this._epoch } _waitForNextTime(e) { let t = this._currentTimestamp(); for (; e >= t;) t = this._currentTimestamp(); return t } generate() {
        let e = this._currentTimestamp();
        if (e < this._last_timestamp) throw Error("Clock moved backwards");
        return e === this._last_timestamp ? (this._sequence = this._sequence + this._process_id + 1 & limits.sequence, this._sequence === this._process_id && (e = this._waitForNextTime(this._last_timestamp))) : this._sequence = this._process_id, this._last_timestamp = e, (BigInt(e) << BigInt(shifts.timestamp) | BigInt(this._place_id) << BigInt(shifts.place_id) | BigInt(this._sequence))
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