const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.locals.locations = ["Metropolis", "Wakanda", "Hogwarts"];

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Feather';

app.get("/api/v1/locations", (request, response) => {
  response.status(200).json(app.locals.locations);
});

export default app