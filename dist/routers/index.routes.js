"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var person_router_1 = __importDefault(require("./person.router"));
var routes = (0, express_1.default)();
routes.use(person_router_1.default);
exports.default = routes;
