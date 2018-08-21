# Week 2: CRUD

## Creating Documents
- When creating new documents Mongo creates an `_id` of type `ObjectId`
- `_id` is a unique identifier in a collection
- `_id` can be passed in when creating a document too
- In practice you generally want Mongo to create an id.
- `db.{collection}.insertMany(): Inserts many in the collection as an array, array can contain many objects. 
    - Return value has an array of `insertedIds` which contains `ObjectIds`
- When bulk inserting and there is an error:
    - Ordered Inserts
    - Unordered Inserts
- By default `insertMany` does an ordered insert
    - It inserts until an error
    - Command bails out 
- Specify `{ordered: false}` when using `insertMany`
    - This inserts even with errors
- `insertOne` and `insertMany` are the primary ways to create documents
- Update commands can create too, this is called `upserts`

## _id
- MongoDB, if not specified with `id`, creates `ObjectId` for each entry.
- ObjectId: 12-Byte Hex String
    - Date: 4 bytes
    - MAC Address: 3 bytes
    - PID: 2 bytes
    - Counter: 3 bytes

## Reading Documents
- db.{collection}.find({queryDocument})
    - query document can be `{rated: "PG-13"}`
    - or `{rated: "PG-13", year: 2009}`
        - this is implicitly `and`.
- Equality in embedded documents
    - db.{collection}.find({ "tomato.meter": 100 }).pretty()
- Equality matches on array:
    - On the entire array
    - based on an element
    - based on a specific element
    - more complex matches using operators
- Exact match on entire array:
    - db.movieDetails.find({ "writers": ["Ethan Coen", "Joel Coen"] }).count()
    - If the writers were flipped it would get no results
- Based on an element:
    - db.movieDetails.find({ "actors": "Jeff Bridges" }).pretty()
    - provies movies with Jeff Bridges is any field in the actors array
- Based on a specific element:
    - db.movieDetails.find({ "actors.0": "Jeff Bridges" })
    - Only movies where Jeff Bridges is starring
- Cursors:
    - .find() returns a cursor 
    - By default .find() returns 101 items
    - Or 1MB, the rest of the batches will return 4MBs
    - `var c = db.movieDetails.find()` 
    - `c.objsLeftInBatch();`
    - `var doc = () => (c.hasNext ? c.next : null);`
- Projection:
    - Reduces the size of the data returned in any query
    - Reduce network overhead and processing requirements
    - `db.movieDetails.find({ rated: "PG"} , {title: 1})`
        - only fields returned. (also _id)
    - `db.movieDetails.find({ rated: "PG"} , {title: 1, _id: 0})`
        - only title returned. 
    - `db.movieDetails.find({ rated: "PG"} , { writers: 0, actors: 0, _id: 0})`
        - excludes the above fields from the results

