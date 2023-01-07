import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/", async (_req, res) => {
  res.json({ message: "Hello world" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App running on port ${port}`));
