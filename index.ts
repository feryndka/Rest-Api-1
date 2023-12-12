import express, { Application, Request, Response } from "express"

const PORT = 8888

const app : Application = express()

app.get("/", (req : Request, res : Response) => {
  return res.send({
    Name : "Fery",
    Age : 20
  })
})

app.post("/", (req : Request, res : Response) => {
  return res.send({
    message : "POST Request Called"
  })
})

app.put("/", (req : Request, res : Response) => {
  return res.send({
    message : "PUT Request Called"
  })
})

app.delete("/", (req : Request, res : Response) => {
  return res.send("DELETE Request Called")
})

app.listen(PORT, () => {
  console.log("Application run on port :", PORT)
})