const express = require('express')
require('./src/config/db/mongoose')
const departmentSeed=require('./src/config/seed/departmentseeder')
const userRouters = require('./src/api/users/user.routers')
const departmentRouter = require('./src/api/department/department.router')
const designationSeeder = require('./src/config/seed/designationseeder')
const kraAttributesSeeder = require('./src/config/seed/kra_attributesSeeder')
const adminSeeder= require('./src/config/seed/adminseeder')
const kraRouter= require('./src/api/kraSheets/krasheetRouters')
const showemploye=require('./src/api/admin/admin_routers/admin_router')
const app = express()
const port = process.env.PORT || 5050
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRouters)
app.use(departmentRouter)
app.use(kraRouter)
app.use(showemploye)
app.use(departmentSeed)
app.use(designationSeeder)
app.use(kraAttributesSeeder)
app.use(adminSeeder)


app.listen(port, () => {
    console.log('Server is running at port ' + port)
})

