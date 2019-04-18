const Sequelize = require('sequelize');
const {db} = require('../config/database')
const userSchema = db.define('tblUsers',{
    uid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    fName:{
        type: Sequelize.STRING
    },
    lName:{
        type: Sequelize.STRING
    },
    uName:{
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    phoneNo: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATEONLY
    },

});

userSchema.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = userSchema;
