import express from "express";
import * as wordController from "../controllers/wordController";

const router = express.Router();

// endpointen blir /api/count/ och kör metoden countWords
router.post("/count", (req, res, next) => {
  wordController
    .countWords(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      next(error);
    });
});

export default router;
