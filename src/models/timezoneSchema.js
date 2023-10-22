const mongoose = require("mongoose"); 
const {Schema} = mongoose
const schema = new Schema({
    store_id:{
        type: String, 
        required: false,
    },
    timezone_str:{
        type: String, 
        required: false,
    },
});

const timezoneSchema = mongoose.model('timezone', schema)

module.exports = timezoneSchema