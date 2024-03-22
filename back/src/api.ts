import express, { json } from "express";
import { Article, NewArticle } from "./interfaces/Article";

const app = express.Router();

export default app;

let articles: Article[] = [
  { id: "A1", name: "Tournevis", price: 2.99, qty: 45 },
  { id: "A2", name: "Marteau", price: 42.99, qty: 145 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", json(), (req, res) => {
  const newArticle: NewArticle = req.body;
  articles.push({ ...newArticle, id: crypto.randomUUID() });
  res.status(201).end();
});

app.delete("/articles", json(), (req, res) => {
  const ids: Article["id"][] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(201).end();
});
