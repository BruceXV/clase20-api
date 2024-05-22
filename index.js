//paso 0
const express = require("express");

const app = express();

const port = 3001;


const { getCountry , getCountryById} = require("./getCountries")
//paso 1.5

app.get("/", getCountry);

app.get("/:id", getCountryById)

//paso 0
app.listen(port, ()=> {
    console.log("lo hizimos bien a pensar de la lluvia");
    console.log("lo hizimos")
    console.log(`Aplicacion corriendo en el pueryo ${port}`);
});