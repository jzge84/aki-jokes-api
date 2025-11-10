import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const jokes = [
  { id: 1, setup: "Why did the developer go broke?", punchline: "Because he used up all his cache." },
  { id: 2, setup: "How many programmers does it take to change a light bulb?", punchline: "None, it's a hardware problem." },
  { id: 3, setup: "I told my computer I needed a break.", punchline: "It said 'No problem, I'll go to sleep'." }
];

app.get("/", (_req, res) => {
  res.type("text/plain").send("Akin Jokes API toimii! Katso /jokes ja /jokes/count");
});

app.get("/jokes", (_req, res) => res.json(jokes));

app.get("/random", (_req, res) => {
  const idx = Math.floor(Math.random() * jokes.length);
  res.json(jokes[idx]);
});

app.get("/jokes/count", (_req, res) => {
  res.json({ count: jokes.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
