const express = require('express');
const engines = require('consolidate');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);

MongoClient.connect('mongodb://localhost:27017/video', (err, db) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB');

    app.get('/', (req, res) => {
        db.collection('movies').find({}).toArray((err, docs) => {
            res.render('movies', { 'movies': docs });
        });
    });

    app.use((req, res) => {
        res.sendStatus(404);
    });

    const server = app.listen(3000, () => {
        const port = server.address().port;
        console.log(`Express server listening on ${port}`);
    })
})