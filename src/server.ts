import express from 'express';

const app = express();

app.get("/test", (request, response) => {
  return response.send('Olá Nlw')
});

app.post("/testpost", (request, response) => {
  return response.send("Olá Post");
})

app.listen(3000, () => console.log('Server is runing'));