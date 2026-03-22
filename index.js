import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ANA SAYFA
app.get("/", (req, res) => {
  res.send("Fotoran API çalışıyor 🚀");
});

// AI ENDPOINT
app.post("/ai", async (req, res) => {
  const userText = req.body.text;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyDbVogn11YWZbWty_nOzLKAS0DULAW1mHM"
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userText }] }]
        })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Hata oluştu" });
  }
});

app.listen(3000, () => console.log("Server çalışıyor"));