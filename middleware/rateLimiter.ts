import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

export const limiter = (req: Request, res: Response, next: NextFunction) => {
  // Kontrollerar att inte för många API anrop görs
  try {
    const limiterMiddleware = rateLimit({
      max: 100,
      windowMs: 10 * 60000,
      message: "För många API anrop har gjorts. Försök igen om tio minuter.",
    });

    limiterMiddleware(req, res, next);
  } catch (error) {
    // Hanterar fel
    console.error("Rate limiter encountered an error", error);
    res.status(500).json({
      success: false,
      error: "Internt serverfel",
    });
  }
};
