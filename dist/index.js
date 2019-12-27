"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function theDateOfSpan(span) {
    var now = new Date();
    var theDate = new Date(now.setDate(now.getDate() + span));
    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1;
    var date = theDate.getDate();
    return year + "-" + utils_1.padTimeStr(month) + "-" + utils_1.padTimeStr(date);
}
function theMonthOfSpan(span) {
    var now = new Date();
    var theDate = new Date(now.setMonth(now.getMonth() + span));
    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1;
    return year + "-" + utils_1.padTimeStr(month);
}
function theHourOfSpan(span) {
    var now = new Date();
    var theDate = new Date(now.setHours(now.getHours() + span));
    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1;
    var date = theDate.getDate();
    var hours = theDate.getHours();
    var minute = theDate.getMinutes();
    return year + "-" + utils_1.padTimeStr(month) + "-" + utils_1.padTimeStr(date) + " " + utils_1.padTimeStr(hours) + ":" + utils_1.padTimeStr(minute);
}
function theTimeOfSpanBy(type, span) {
    if (type === 'date') {
        return theDateOfSpan(span);
    }
    else if (type === 'month') {
        return theMonthOfSpan(span);
    }
    else {
        return theHourOfSpan(span);
    }
}
exports.theTimeOfSpanBy = theTimeOfSpanBy;
