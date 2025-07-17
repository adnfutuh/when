import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);

  // Tampilkan halaman sukses
  res.sendFile(path.join(__dirname, "../public/views/success.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
