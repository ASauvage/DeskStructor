const propertiesReader = require('properties-reader');
const express = require('express')
const bodyParser = require('body-parser');
const responseBuilder = require('./lib/response-builder')

const properties = propertiesReader('conf.properties');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiv1 = '/api/v1/'

var data = require("./data.json")


app.use((req, res, next) => {
    console.log('URL: ' + req.url)
    next()
})

app.use(apiv1 + 'floor/desk/:id', (req, res) => {
    switch (req.method) {
        case 'GET':
            break
        
        case 'POST':

            break

        case 'PUT':

            break
        
        case 'DELETE':

            break
    }
})

app.use(apiv1 + 'floor/desk/', (req, res) => {
    switch (req.method) {
        case 'GET':

            break
        
        case 'POST':

            break

        case 'PUT':

            break
        
        case 'DELETE':

            break
    }
})

app.use(apiv1 + 'floor/:id', (req, res) => {
    switch (req.method) {
        case 'GET':
            floor = data.find(x => x.id === req.params.id)

            if (floor == undefined) {
                floor = {}
            }

            res.json({
                "metadata": responseBuilder.metabuilder(req, res),
                "floor": floor
            })
            break
        
        case 'POST':

            break

        case 'PUT':

            break
        
        case 'DELETE':

            break
    }
})

app.use(apiv1 + 'floor/', (req, res) => {
    switch (req.method) {
        case 'GET':
            var floors = []

            for (const floor of data) {
                floors.push((({ id, name, available }) => ({ id, name, available }))(floor))
            }

            res.json({
                "metadata": responseBuilder.metabuilder(req, res),
                "floors": floors
            })
            break
        
        case 'POST':

            break

        case 'PUT':

            break
        
        case 'DELETE':

            break
    }
})



app.listen(properties.get("node.port"), () => {
    console.log('Serveur started')
})
