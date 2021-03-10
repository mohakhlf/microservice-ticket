"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
require("dotenv/config");
var PORT = process.env.PORT;
var app = express_1.default();
app.use(body_parser_1.json());
app.listen(PORT, function () {
    console.log("auth service listening on port " + PORT);
});
