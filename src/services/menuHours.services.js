const menuHoursSchema = require('../models/menuHoursSchema'); 
const getCsvData = require('../controller/menuHoursController')
const insertMenuHours = async(csvData)=>{
    try {
        const document = await menuHoursSchema.insertMany(getCsvData);
    } catch (error) {
        
    }
} 

module.exports = insertMenuHours;