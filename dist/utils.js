"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padTimeStr = function (date) {
    var dateStr = typeof date === 'number' ? date.toString() : date;
    return dateStr.padStart(2, '0');
};
