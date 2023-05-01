import { Request, Response, NextFunction } from "express";
import DateParser from "../lib/dateParser";

const validateDate = (req: Request, res: Response, next: NextFunction) => {
  if (DateParser.validate(req.params.date)) {
    return next();
  }
  return res.status(422).json({ error: "Invalid date" });
};

export default validateDate;
