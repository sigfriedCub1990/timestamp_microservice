import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import validateDate from "./middlewares/validateDate";
import DateParser from "./lib/dateParser";

dotenv.config();

const app = express();

app.use(cors());

app.get("/api", (_, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get("/api/:date", validateDate, (req, res) => {
  const { date } = req.params;

  const requestedDate = DateParser.parse(date);

  res.json({
    unix: requestedDate.getTime(),
    utc: requestedDate.toUTCString(),
  });
});

export default app;
