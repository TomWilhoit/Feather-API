const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.locals.locations = [
  {
    ficName: "Metropolis",
    realName: "New York City",
    id: 0,
    lat: 40.7128,
    long: -74.006,
    cat: "DC",
    reason: "Ipso Lorum"
  },
  {
    ficName: "Wakanda",
    realName: "Democratic Republic of the Congo",
    id: 1,
    lat: 4.8594,
    long: 31.5713,
    cat: "Marvel",
    reason: "Ipso Lorum"
  },
  {
    ficName: "Hogwarts",
    realName: "Northern Scotland",
    id: 2,
    lat: 57.4216,
    long: 4.6656,
    cat: "Harry Potter",
    reason: "Ipso Lorum"
  }
];

app.set("port", process.env.PORT || 3000);
app.locals.title = "Feather";

app.get("/api/v1/locations", (request, response) => {
  response.status(200).json(app.locals.locations);
});

export default app;
