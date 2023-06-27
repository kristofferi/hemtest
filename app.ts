import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { limiter } from "./middleware/rateLimiter";
import wordRoute from "./routes/wordRoute";
import { ApiResponse } from "./interfaces/apiResponse";

dotenv.config();

const app = express();

// Porten hämtas från .env filen
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// body från API request
app.use(bodyParser.json());

// Routing för att köra metoden countWords
app.use("/api", wordRoute);

// Kontrollerar att inte för många API anrop görs på 10 min
app.use("/api/count", limiter);

// Felhantering
app.use((req, res, next) => {
  try {
    const error = new Error("404, hittar inte");
    const response: ApiResponse<null> = {
      success: false,
      error: error.message,
    };
    res.status(404).json(response);
  } catch (error) {
    console.error("Ett fel har inträffat", error);
    const response: ApiResponse<null> = {
      success: false,
      error: "Internt Serverfel",
    };
    res.status(500).json(response);
  }
});
