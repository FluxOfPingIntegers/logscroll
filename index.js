"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogScroll = /** @class */ (function () {
    function LogScroll() {
        var _this = this;
        /*
        private async getFileName(): Promise<string> {
          return await this.fileNamePromise;
        }
        */
        this.logAbsolutePath = function () {
            var absolutePath = _this.getAbsolutePath();
            console.log("Absolute Path:", absolutePath);
        };
        this.absolutePath = this.getAbsolutePath();
    }
    LogScroll.prototype.fetchAbsolutePath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var absPath, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return resolve(__filename);
                            })];
                    case 1:
                        absPath = _a.sent();
                        return [2 /*return*/, absPath];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, "LOGSCROLL ERROR: ".concat(e_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LogScroll.prototype.fetchFileName = function () {
        return new Promise(function (resolve) {
            resolve(__filename);
        });
    };
    LogScroll.prototype.getAbsolutePath = function () {
        // const absPath = Promise.resolve(this.fetchAbsolutePath());
        var absPath = this.fetchAbsolutePath();
        return absPath;
    };
    /*
    async logFileName(): Promise<void> {
      const fileName = await this.getFileName();
      console.log("File Name:", fileName);
    }
    */
    LogScroll.prototype.logLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var absolutePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAbsolutePath()];
                    case 1:
                        absolutePath = _a.sent();
                        // const fileName = await this.getFileName();
                        console.log("Absolute Path:", absolutePath);
                        return [2 /*return*/];
                }
            });
        });
    };
    return LogScroll;
}());
exports.default = LogScroll;
