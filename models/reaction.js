//Use Mongoose's ObjectId data type, Default value is set to a new ObjectId
const {Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//reactionID
const reactionSchema = new Schema(
{
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    
}
)

//reactionbody
//string, required, 280 character max

//username
//string, required

//createdAt
//date, Set default value to the current timestamp, Use a getter method to format the timestamp on query

//Schema settings
//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema
