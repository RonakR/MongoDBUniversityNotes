# Week 1

## What is MongoDb?
- Document Database
- JSON for storage
- Dev teams can design datamodels around data access patterns
- Store all related data in one document
- Since relations are not spread out among tables, sharding is made easier when trying to scale
- Scaling out is built into Mongo
- Schema design models support atomic reads and writes

## Overview of Building an App with MongoDb
- High level overview of apps using mongo
- Mongo DB core server written in C++
- client <--> server <--> MongoBD
- Mongo has a shell
- Node uses a library to communicate w/ mongodb (orm)


## Installing MongoDB (mac)
- Just use brew

## JSON
- JSON is key-value pairs
- keys are always strings
- keys and values are seperated by `:`
- fields are seperated by `,`
- json are seperated by `{}`
- Supported types: String, Number, Boolean, Array, Object
- Mongodb json 

## BSON
- Binary JSON
- MongoDB drivers send recieve and save as BSON
- On the app side MongoDB drivers convert it to JSON
- BSON is lightweight, traversable (and indexable), and efficient (encoding and decoding done quickly)
- BSON extends JSON types
- Supported types: JSON types + Integer, Date, Images

## Intro to Creating and Reading Documents
- CRUD - Create, Read, Update, Delete
- In MongoDB, documents are stored in collections, collections are stored in databases
- Each document has a unique `ObjectId` field

| Command                                    | Description                                             |
| ------------------------------------------ | ------------------------------------------------------- |
| help                                       | Shows available commands                                |
| show dbs                                   | Shows all databases                                     |
| use <db-name>                              | Switches to <db-name>, creates if doens't exist         |
| db.<collection-name>.insertOne(<document>) | Insert a <document> in <collection-name>                |
| db.<collection-name>.find()                | Retrives all documents from <collection-name>           |
| ^.pretty()                                 | Arranges the documents neatly                           |
| db.<collection-name>.find(<constraints>)   | Retrieves all documents in <collection-name> that match |

## Installing Node.js
- Grab it from the site

## Hello World in Node.js
- Look at hello_world/app.js
- Simple node js server
- For the rest of the course we will be using ExpressJS

## Introduction to npm
- npm: Node Package Manager
- npm init: Prompts to create base package.json 
- npm install: Installs package
- npm install --save: Saves package to package.json for later installs

## Intro to the Node.js MongoDB Driver
- Driver is a library written in a langauage, js in this case.
- Handles creating a wire connection to mongodb, i.e. socket connection, managing errors and connection to replica sets.
- Install using npm and use it like any other driver
- Whether you're doing a query or connecting to the db, all functions in the mongodb driver are asynchronous
- All of them accepts callbacks

## Hello World using Express
- ExpressJS is a library that makes creating and handling an HTTP server easy.

## Hello World using Templates
- Instead of sending text, we want send an html page. 
- Use template libraries
- Make directory for view template
- Express requires template libraries to have a certain set of requiremnts 
    - consolidate helps with that. 
- Express allows to specify template engine, view engine and directory of where the views are
- With in the endpoint, use the render function to pass in view name and view parameters

## All Together Now
- Combines the NodeJS Driver and the Hello World Template to create a webpage that shows the movies stored in the db
- Check out the code for more info

## Express Handling GET/POST Requests
- Not necessary for the course
- Examples on GET and POST requests using Express
