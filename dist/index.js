"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Melayani file statis dari folder 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Routes
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/views/login.html"));
});
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    // Tampilkan halaman sukses
    res.sendFile(path_1.default.join(__dirname, "../public/views/success.html"));
});
// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
