const express=require("express");

const app=express();

const index=require("./routesContacts/index");

const contacts=require("./routesContacts/routesContacts")

app.use(express.json())

app.use("/",index);
app.use("/contacts",contacts);

module.exports=app