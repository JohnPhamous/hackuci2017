//////////////////
// Page model //
//////////////////

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var pageSchema = new Schema({
 
    ////////////////////
    // MongoDB Fields //
    ////////////////////

    _id: {
        type: ObjectId,
        auto: true
    },
    __v: {
        type: Number,
        select: false
    },

    ////////////////////
    // Default Fields //
    ////////////////////

    pageId: {
        type: String,
        unique: true,
        required: true,
        dropDups: true,
        index: true
    },
    name: String,
    posts: [String], //pageIds
    phrases: [String],
    like: Number, //aggregate of all posts, avoiding recal
    love: Number,
    haha: Number,
    wow: Number,
    sad: Number,
    angry: Number,
    //////////////////////
    // Timestamp Fields //
    //////////////////////

    created: Date,
    modified: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Page', pageSchema); 
