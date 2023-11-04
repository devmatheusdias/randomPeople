"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var personRouter = (0, express_1.Router)();
personRouter.get('/person');
exports.default = personRouter;
