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
