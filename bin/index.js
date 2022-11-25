"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoint_1 = __importDefault(require("./endpoints/endpoint"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/subscriptionlist", (req, res) => {
    endpoint_1.default.getSubscriptionList(req, res);
});
app.listen(port, () => {
    console.log(`App is running on :${port}`);
});
