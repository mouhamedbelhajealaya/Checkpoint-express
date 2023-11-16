const express= require('express')
const app=express()
const Studentroute =require('./routes/routeStudent')








app.use(Studentroute)




app.listen(8000,()=>console.log('server run on port 8000'))
