"use strict";
exports.__esModule = true;
var path = require("path");
var LogScroll = /** @class */ (function () {
    function LogScroll() {
        this.fileLocation = this.getCurrentFileLocation();
    }
    LogScroll.prototype.getCurrentFileLocation = function () {
        // const fileUrl = import.meta.url;
        // const filePath = new URL(fileUrl).pathname;
        // const currentDirectory = process.cwd();
        // const rootDirectory = path.resolve(__dirname, '../../');
        // const currentLocation = path.relative(currentDirectory, rootDirectory);
        var srcPath = path.join(__dirname, "../");
        var fileName = path.basename(__filename);
        return fileName;
    };
    LogScroll.prototype.logLocation = function () {
        console.log("At Location:", this.fileLocation);
    };
    return LogScroll;
}());
exports["default"] = LogScroll;
