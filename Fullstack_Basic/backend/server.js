import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of jockes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    " What do dentists call their x-rays? Tooth pics!",
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
