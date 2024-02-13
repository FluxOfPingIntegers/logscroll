"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var LogScroll = /** @class */ (function () {
    function LogScroll(callerLocation) {
        this.callerLocation = callerLocation;
        this.absolutePath = this.fetchAbsolutePath();
        this.fileName = this.fetchFileName();
    }
    LogScroll.prototype.fetchAbsolutePath = function () {
        var absPath = process.cwd().concat("/");
        return absPath;
    };
    LogScroll.prototype.getAbsolutePath = function () {
        return this.absolutePath;
    };
    LogScroll.prototype.getFileName = function () {
        return this.fileName;
    };
    // TODO: bug - always specifies file class is defined in.  Needs to be file where initialized.
    LogScroll.prototype.fetchFileName = function () {
        var fileName = path.basename(__filename);
        return fileName;
    };
    LogScroll.prototype.logAbsolutePath = function () {
        console.log(this.getAbsolutePath());
    };
    LogScroll.prototype.logFileName = function () {
        console.log(this.getFileName());
    };
    LogScroll.prototype.logLocation = function () {
        var location = this.getAbsolutePath().concat(this.getFileName());
        console.log(location);
    };
    return LogScroll;
}());
exports.default = LogScroll;
