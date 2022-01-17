const {Schema, model} = require('mongoose');
//username
//string, unique, required, trimmed
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
         

//email
//string, required, unique, Must match a valid email address (look into Mongoose's matching validation)
email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
//thoughts
//Array of _id values referencing the Thought model

//friends
//Array of _id values referencing the User model (self-reference)

//Schema Settings
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.


}
)