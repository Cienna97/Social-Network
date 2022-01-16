const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');


//thoughtText
//string, required, must be between 1 and 280 characters
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280
      },
  
//createAt
//date, set default value to current time stamp, use a getter method to format timestamp
createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },

//username
//string, required
username: {
    type: String,
    required: true
  },

//reactions
//Array of nested documents with the reactionSchema
reactions: [reactionSchema]
},
{
  toJSON: {
    getters: true
  },
  id: false
}
);

//Schema Settings
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;
