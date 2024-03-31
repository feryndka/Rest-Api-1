"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    return res.send({
        Name: "Fery",
        Age: 20
    });
});
app.post("/", (req, res) => {
    return res.send({
        message: "POST Request Called"
    });
});
app.put("/", (req, res) => {
    return res.send({
        message: "PUT Request Called"
    });
});
app.delete("/", (req, res) => {
    return res.send("DELETE Request Called");
});
app.listen(PORT, () => {
    console.log("Application run on port :", PORT);
});
