const mongoose = require('mongoose') 
const {Schema} = mongoose


const schema = Schema({
    store:{
        type: String, 
        required: true
    },
    day :{
        type:Number, 
        required: false

    },
    start_time_local :{
        type: String, 
        required: false
    },
    end_time_local :{
        type: String, 
        required: false
    }
})

const menuHoursSchema = mongoose.model("MenuHours", schema) ;

module.exports = menuHoursSchema;