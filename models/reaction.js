//Use Mongoose's ObjectId data type, Default value is set to a new ObjectId
const {Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//reactionID
const reactionSchema = new Schema(
    {
reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
},

//reactionbody
//string, required, 280 character max
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
//username
//string, required
username: {
    type: String,
    required: true
},
//createdAt
//date, Set default value to the current timestamp, Use a getter method to format the timestamp on query
createdAt: {
    type: Date,

    default: Date.now,
    get: timestamp => dateFormat(timestamp)
}
//Schema settings
//This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

},
{
    toJSON: {
        getters: true
    }
}
)

module.exports = reactionSchema
