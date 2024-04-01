import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app: Application = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  return res.send({
    Name: "Fery Andika",
    Age: 20,
  });
});

app.post("/login", (req: Request, res: Response) => {
  console.log({ requestFromOutside: req.body });
  return res.send({
    message: "POST Request Login Success",
  });
});

app.put("/", (req: Request, res: Response) => {
  return res.send({
    message: "PUT Request Called",
  });
});

app.delete("/", (req: Request, res: Response) => {
  return res.send("DELETE Request Called");
});

app.listen(PORT, () => {
  console.log("Application run on port :", PORT);
});
