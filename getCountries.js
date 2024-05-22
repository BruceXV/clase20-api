//paso 2

const {request, response } = require("express");

const {paises} = require("./paises");

const getCountry = (req = request, res  = response) => {
    res.json ({
        ok:true,
        paises,
        statusCode:200
    })
}

const getCountryById = (req = request, res  = response) => {
    res.json ({
        ok:true,
        paises,
        statusCode:200
    })
}

module.exports = {
    getCountry,
    getCountryById
}