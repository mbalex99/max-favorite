//e.g server.js
import express from "express";
import ViteExpress from "vite-express";

const PORT = process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
